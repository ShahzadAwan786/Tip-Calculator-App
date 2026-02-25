import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";

export default function TipPercButtons() {
  const tipPerc = [5, 10, 15, 25, 50];
  return (
    <>
      <FieldLabel className="label-text">Select Tip %</FieldLabel>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {tipPerc.map((tip) => (
          <Button
            key={tip}
            className="h-13 text-base font-semibold  sm:text-2xl hover:bg-foreground hover:text-primary"

            //   selected === tip
            //     ? "bg-secondary text-primary"
            //     : "bg-primary text-primary-foreground hover:opacity-90",
          >
            {tip}%
          </Button>
        ))}

        <InputGroup className="h-13">
          <InputGroupInput
            placeholder="Custom"
            // className="text-base font-medium sm:text-lg"
          />
        </InputGroup>
      </div>
    </>
  );
}
