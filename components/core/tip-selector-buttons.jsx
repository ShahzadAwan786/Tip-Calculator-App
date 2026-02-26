import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { useTipCalculator } from "./tip-calculator-context";
import ReusableFormInput from "../common/reusable-form-input";

export default function TipSelectorButtons() {
  const { tipPercent, setTipPercent, onFocus, onKeyDown } = useTipCalculator();
  const tipPerc = [5, 10, 15, 25, 50];
  const isTipPerc = tipPerc.includes(tipPercent);
  const isZero = tipPercent !== "" && Number(tipPercent) <= 0;
  return (
    <>
      <FieldLabel className="label-text">Select Tip %</FieldLabel>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {tipPerc.map((tip) => (
          <Button
            key={tip}
            onClick={(e) => {
              (e.preventDefault(), setTipPercent(tip));
            }}
            className={`h-13 text-lg font-semibold  sm:text-2xl hover:bg-foreground hover:text-primary 
              ${tipPercent === tip ? "bg-foreground text-primary" : ""}`}
          >
            {tip}%
          </Button>
        ))}

        <ReusableFormInput
          placeholder="Custom"
          groupClassName={"h-13"}
          value={isTipPerc ? "" : tipPercent}
          onChange={(e) => setTipPercent(e.target.value)}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
      </div>
      {isZero && (
        <p className="text-red-500 text-xs flex justify-end mt-0">
          Must be greater than 0
        </p>
      )}
    </>
  );
}
