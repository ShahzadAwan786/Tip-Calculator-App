"use client";
import ReusableResultsRow from "@/components/common/reusable-results-row";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTipCalculator } from "./tip-calculator-context";

export default function TIpResultPanel() {
  const { bill, people, reset, tipPerPerson, totalPerPerson } =
    useTipCalculator();

  return (
    <div className="bg-primary sm:m-4 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
      <div className="space-y-6">
        <ReusableResultsRow label="Tip Amount" value={tipPerPerson} />
        <ReusableResultsRow label="Total" value={totalPerPerson} />
      </div>
      <Button
        className="w-full h-12 bg-secondary text-primary text-lg sm:text-xl mt-10 font-bold hover:bg-foreground disabled:bg-[#0d686d]"
        disabled={!bill || !people}
        onClick={() => reset()}
      >
        RESET
      </Button>
    </div>
  );
}
