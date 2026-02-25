"use client";
import { createContext, useContext, useState } from "react";

const TipCalculatorContext = createContext(null);

export default function TipCalculatorProvider({ children }) {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipPercent, setTipPercent] = useState(null);

  const parseBillInput = parseFloat(bill) || 0;
  const parsePeopleInput = parseInt(people) || 0;

  const tipAmount = (tipPercent * parseBillInput) / 100 || 0;
  const totalAmount = parseBillInput + tipAmount;
  const tipPerPerson =
    parseBillInput && tipPercent && parsePeopleInput
      ? tipAmount / parsePeopleInput
      : 0;
  const totalPerPerson =
    parseBillInput && tipPercent && parsePeopleInput
      ? totalAmount / parsePeopleInput
      : 0;

  const reset = () => {
    setBill("");
    setPeople("");
    setTipPercent(null);
  };
  const value = {
    bill,
    setBill,
    people,
    setPeople,
    tipPercent,
    setTipPercent,
    tipPerPerson,
    totalPerPerson,
    reset,
  };
  return (
    <TipCalculatorContext.Provider value={value}>
      {children}
    </TipCalculatorContext.Provider>
  );
}

export function useTipCalculator() {
  const context = useContext(TipCalculatorContext);
  return context;
}
