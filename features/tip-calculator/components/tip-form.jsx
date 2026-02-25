import { Field, FieldGroup } from "@/components/ui/field";
import TipPercButtons from "./tip-perc-buttons";
import ReusableFormInput from "@/components/common/reusable-form-input";

export default function TipForm() {
  return (
    <form className="p-4 sm:p-8">
      <FieldGroup>
        <Field>
          <ReusableFormInput label="Bill" icon="$" placeholder="0" />
        </Field>
        <Field>
          <TipPercButtons />
        </Field>
        <Field>
          <ReusableFormInput
            label="Number of People"
            icon="#"
            placeholder="0"
          />
        </Field>
      </FieldGroup>
    </form>
  );
}
