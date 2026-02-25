import { FieldLabel } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";

export default function ReusableFormInput({
  id,
  label,
  icon,
  placeholder,
  value,
  onChange,
}) {
  const isZero = value !== "" && Number(value) === 0;

  return (
    <>
      <div className="flex justify-between ">
        <FieldLabel htmlFor={id} className="label-text">
          {label}
        </FieldLabel>
        {isZero && <p className="text-red-500 text-xs mt-1">Can't be zero</p>}
      </div>
      <InputGroup className={`${isZero ? "!ring-red-400" : ""}`}>
        <InputGroupAddon>
          <InputGroupText className="text-2xl text-accent-foreground">
            {icon}
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id={id}
          placeholder={placeholder}
          className={`input-text`}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
    </>
  );
}
