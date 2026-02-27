import { Field, FieldGroup, FieldLabel } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";

export default function FormInput({
  labelId,
  label,
  icon,
  groupClassName = "",
  inputClassName = "",
  showError = false,
  error = "",
  ...props
}) {
  return (
    <>
      {label && (
        <Field className="flex flex-row justify-between items-end">
          <FieldLabel htmlFor={labelId} className="label-text">
            {label}
          </FieldLabel>
          {showError && error && (
            <p className="text-red-500 text-xs mt-1 w-full ">{error}</p>
          )}
        </Field>
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
          id={labelId}
          className={`input-text ${inputClassName}`}
          aria-invalid={showError}
          {...props}
        />
      </InputGroup>
    </>
  );
}
