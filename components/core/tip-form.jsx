"use client";

import { Field, FieldGroup } from "@/components/ui/field";
import { IoPerson } from "react-icons/io5";
import TipSelectorButtons from "./tip-selector-buttons";
import FormInput from "../common/form-input";
import { Controller, useFormState } from "react-hook-form";

export default function TipForm({ methods }) {
  const { control, setValue, clearErrors } = methods;
  const { errors } = useFormState({ control });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  return (
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
                onKeyDown={handleKeyDown}
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
            clearErrors={clearErrors}
            onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
                showError={!!errors.people && field.value !== ""}
                error={errors.people?.message}
              />
            )}
          />
        </Field>
      </FieldGroup>
    </form>
  );
}
