"use client";
import { createContext, useContext, useState } from "react";

const TipCalculatorContext = createContext(null);

export default function TipCalculatorProvider({ children }) {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipPercent, setTipPercent] = useState("");

  const billValue = Number(bill);
  const peopleValue = Number(people);

  const isValid =
    billValue > 0 &&
    peopleValue > 0 &&
    tipPercent > 0 &&
    Number.isFinite(billValue) &&
    Number.isFinite(peopleValue);

  let totalPerPerson = 0;
  let tipPerPerson = 0;

  if (isValid) {
    const tipAmount = (tipPercent * billValue) / 100;
    const totalAmount = billValue + tipAmount;
    tipPerPerson = tipAmount / peopleValue;
    totalPerPerson = totalAmount / peopleValue;
  }
  const reset = () => {
    setBill("");
    setPeople("");
    setTipPercent("");
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
