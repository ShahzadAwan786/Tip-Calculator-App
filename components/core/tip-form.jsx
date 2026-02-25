"use client";
import { Field, FieldGroup } from "@/components/ui/field";
import ReusableFormInput from "@/components/common/reusable-form-input";
import { IoPerson } from "react-icons/io5";
import TipSelectorButtons from "./tip-selector-buttons";
import { useTipCalculator } from "./tip-calculator-context";

export default function TipForm() {
  const { bill, setBill, people, setPeople } = useTipCalculator();
  return (
    <form className="p-4 sm:p-8">
      <FieldGroup>
        <Field>
          <ReusableFormInput
            id="bill"
            label="Bill"
            icon="$"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </Field>
        <Field>
          <TipSelectorButtons />
        </Field>
        <Field>
          <ReusableFormInput
            id="people"
            label="Number of People"
            icon={<IoPerson />}
            placeholder="0"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </Field>
      </FieldGroup>
    </form>
  );
}
