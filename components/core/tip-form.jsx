"use client";
import { Field, FieldGroup } from "@/components/ui/field";
import ReusableFormInput from "@/components/common/reusable-form-input";
import { IoPerson } from "react-icons/io5";
import TipSelectorButtons from "./tip-selector-buttons";
import { useTipCalculator } from "./tip-calculator-context";

export default function TipForm() {
  const { bill, setBill, people, setPeople, onFocus, onKeyDown } =
    useTipCalculator();
  const isBillIvalid = bill !== "" && Number(bill) <= 0;
  const isPeopleInvalid = people !== "" && Number(people) <= 0;
  return (
    <form className="p-4 sm:p-8">
      <FieldGroup>
        <Field>
          <ReusableFormInput
            id="bill"
            label="Bill"
            icon="$"
            placeholder="0"
            showError={isBillIvalid}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
          />
        </Field>
        <Field>
          <TipSelectorButtons />
        </Field>
        <Field>
          <ReusableFormInput
            id="people"
            label="Number of People"
            showError={isPeopleInvalid}
            icon={<IoPerson />}
            placeholder="0"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
          />
        </Field>
      </FieldGroup>
    </form>
  );
}
