import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { useTipCalculator } from "./tip-calculator-context";

export default function TipSelectorButtons() {
  const { tipPercent, setTipPercent } = useTipCalculator();
  const tipPerc = [5, 10, 15, 25, 50];
  const isTipPerc = tipPerc.includes(tipPercent);

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

        <InputGroup className="h-13">
          <InputGroupInput
            placeholder="Custom"
            className="input-text"
            value={isTipPerc ? "" : tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
          />
        </InputGroup>
      </div>
    </>
  );
}
