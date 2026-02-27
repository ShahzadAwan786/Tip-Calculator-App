import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { useTipCalculator } from "./tip-calculator-context";
import FormInput from "../common/form-input";
import { Controller } from "react-hook-form";

export default function TipSelectorButtons({ control, errors, setValue }) {
  const { tipPercent, onKeyDown } = useTipCalculator();
  const tipPerc = [5, 10, 15, 25, 50];
  return (
    <>
      <FieldLabel className="label-text">Select Tip %</FieldLabel>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {tipPerc.map((tip) => (
          <Button
            key={tip}
            type="button"
            onClick={() => {
              (setValue("tipPercent", tip), setValue("customTip", ""));
            }}
            className={`h-13 text-lg font-semibold  sm:text-2xl hover:bg-foreground hover:text-primary 
              ${tipPercent === tip ? "bg-foreground text-primary" : ""}`}
          >
            {tip}%
          </Button>
        ))}
        <Controller
          name="customTip"
          control={control}
          render={({ field }) => (
            <FormInput
              {...field}
              placeholder="Custom"
              groupClassName={"h-13"}
              showError={!!errors?.customTip && field.value !== ""}
              onKeyDown={onKeyDown}
            />
          )}
        />
      </div>
      {errors?.customTip && tipPercent !== "" && (
        <p className="text-red-500 text-xs flex justify-end mt-0">
          {errors?.customTip?.message}
        </p>
      )}
    </>
  );
}
