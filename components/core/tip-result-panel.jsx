"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useWatch } from "react-hook-form";
import ResultsRow from "../common/results-row";

const tipCalculator = (bill, people, tipPercent, customTip) => {
  const billValue = Number(bill);
  const peopleValue = Number(people);
  const tipPercentValue =
    customTip !== "" && customTip != null
      ? Number(customTip)
      : Number(tipPercent);

  const isValid =
    billValue > 0 &&
    peopleValue > 0 &&
    tipPercentValue > 0 &&
    Number.isFinite(billValue) &&
    Number.isFinite(peopleValue);

  const tipAmount = isValid ? (tipPercentValue * billValue) / 100 : 0;
  const totalAmount = billValue + tipAmount;
  const tipPerPerson = isValid ? tipAmount / peopleValue : 0;
  const totalPerPerson = isValid ? totalAmount / peopleValue : 0;

  return {
    tipPerPerson,
    totalPerPerson,
  };
};

export default function TipResultPanel({ methods }) {
  const { control, reset } = methods;

  const [bill, people, tipPercent, customTip] = useWatch({
    control,
    name: ["bill", "people", "tipPercent", "customTip"],
  });

  const { tipPerPerson, totalPerPerson } = tipCalculator(
    bill,
    people,
    tipPercent,
    customTip,
  );

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
