import { Card, CardContent } from "@/components/ui/card";
import TipForm from "./tip-form";
import TipCalculatorProvider from "./tip-calculator-context";
import TipResultPanel from "./tip-result-panel";

export function TipCalculatorCard() {
  return (
    <TipCalculatorProvider>
      <div className="min-h-screen grid place-items-center p-4">
        <Card className="overflow-hidden p-0 w-full max-w-4xl rounded-4xl">
          <CardContent className="grid md:grid-cols-2 gap-4 p-4 sm:p-6 ">
            <TipForm />
            <TipResultPanel />
          </CardContent>
        </Card>
      </div>
    </TipCalculatorProvider>
  );
}
