"use client";
import { Card, CardContent } from "@/components/ui/card";
import TipForm from "./tip-form";
import TipResultPanel from "./tip-result-panel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tipSchema } from "./form-schema";

const DEFAULT_VALUES = {
  bill: "",
  tipPercent: "",
  customTip: "",
  people: "",
};

export function TipCalculatorCard() {
  const methods = useForm({
    resolver: zodResolver(tipSchema),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <Card className="overflow-hidden p-0 w-full max-w-4xl rounded-4xl">
        <CardContent className="grid md:grid-cols-2 gap-4 p-4 sm:p-6 ">
          <TipForm methods={methods} />
          <TipResultPanel methods={methods} />
        </CardContent>
      </Card>
    </div>
  );
}
