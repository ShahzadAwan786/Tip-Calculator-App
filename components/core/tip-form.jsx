"use client";

import { Field, FieldGroup } from "@/components/ui/field";
import { IoPerson } from "react-icons/io5";
import TipSelectorButtons from "./tip-selector-buttons";
import { useTipCalculator } from "./tip-calculator-context";
import FormInput from "../common/form-input";
import { FormProvider, Controller, useWatch } from "react-hook-form";
import { useEffect } from "react";

export default function TipForm({ methods }) {
  const { updateForm, onKeyDown } = useTipCalculator();

  const {
    control,
    setValue,
    formState: { errors },
  } = methods;
  const bill = useWatch({ control, name: "bill" });
  const tipPercent = useWatch({ control, name: "tipPercent" });
  const customTip = useWatch({ control, name: "customTip" });
  const people = useWatch({ control, name: "people" });
  console.log(customTip);
  useEffect(() => {
    updateForm({
      bill,
      people,
      tipPercent: customTip || tipPercent,
    });
  }, [bill, people, tipPercent, customTip]);

  return (
    <FormProvider {...methods}>
      <form className="p-4 sm:p-8">
        <FieldGroup>
          <Field>
            <Controller
              name="bill"
              control={control}
              render={({ field }) => (
                <FormInput
                  {...field}
                  labelId="bill"
                  label="Bill"
                  icon="$"
                  placeholder="0"
                  onKeyDown={onKeyDown}
                  showError={!!errors.bill && field.value !== ""}
                  error={errors.bill?.message}
                />
              )}
            />
          </Field>

          <Field>
            <TipSelectorButtons
              control={control}
              errors={errors}
              setValue={setValue}
            />
          </Field>

          <Field>
            <Controller
              name="people"
              control={control}
              render={({ field }) => (
                <FormInput
                  {...field}
                  labelId="people"
                  label="Number of People"
                  icon={<IoPerson />}
                  placeholder="0"
                  onKeyDown={onKeyDown}
                  showError={!!errors.people && field.value !== ""}
                  error={errors.people?.message}
                />
              )}
            />
          </Field>
        </FieldGroup>
      </form>
    </FormProvider>
  );
}
