import { FieldLabel } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";

export default function ReusableFormInput({ label, icon, placeholder }) {
  return (
    <>
      <FieldLabel htmlFor="password" className="label-text">
        {label}
      </FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>{icon}</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={placeholder} className=" text-right" />
      </InputGroup>
    </>
  );
}
