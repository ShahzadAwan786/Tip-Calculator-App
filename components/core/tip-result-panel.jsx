"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTipCalculator } from "./tip-calculator-context";
import ResultsRow from "../common/results-row";

export default function TipResultPanel({ methods }) {
  const { bill, people, tipPerPerson, totalPerPerson } = useTipCalculator();
  const { reset } = methods;
  const isDisabled = !bill || !people;

  return (
    <div className="bg-primary sm:m-4 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
      <div className="space-y-6">
        <ResultsRow label="Tip Amount" value={tipPerPerson} />
        <ResultsRow label="Total" value={totalPerPerson} />
      </div>
      <Button
        className="w-full h-12 bg-secondary text-primary text-lg sm:text-xl mt-10 font-bold hover:bg-foreground disabled:bg-[#0d686d]"
        disabled={isDisabled}
        onClick={reset}
      >
        RESET
      </Button>
    </div>
  );
}
