import { Field, FieldGroup } from "@/components/ui/field";
import BillInput from "./inputs/bill-input";
import PeopleInput from "./inputs/people-input";
import TipPercButtons from "./tip-perc-buttons";

export default function TipForm() {
  return (
    <form className="p-4 sm:p-8">
      <FieldGroup>
        <Field>
          <BillInput />
        </Field>
        <Field>
          <TipPercButtons />
        </Field>
        <Field>
          <PeopleInput />
        </Field>
      </FieldGroup>
    </form>
  );
}
