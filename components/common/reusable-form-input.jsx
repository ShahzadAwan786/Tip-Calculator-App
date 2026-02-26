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
  groupClassName = "",
  inputClassName = "",
  showError = false,
  error = "Must be greater than 0",
  ...props
}) {
  return (
    <>
      {label && (
        <div className="flex justify-between ">
          <FieldLabel htmlFor={id} className="label-text">
            {label}
          </FieldLabel>
          {showError && error && (
            <p className="text-red-500 text-xs mt-1">Must be greater than 0</p>
          )}
        </div>
      )}
      <InputGroup className={groupClassName}>
        {icon && (
          <InputGroupAddon>
            <InputGroupText className="text-2xl text-accent-foreground">
              {icon}
            </InputGroupText>
          </InputGroupAddon>
        )}
        <InputGroupInput
          id={id}
          className={`input-text ${inputClassName}`}
          aria-invalid={showError}
          {...props}
        />
      </InputGroup>
    </>
  );
}
