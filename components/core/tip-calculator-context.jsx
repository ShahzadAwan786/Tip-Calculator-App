"use client";
import { createContext, useContext, useState } from "react";

const TipCalculatorContext = createContext("");

export default function TipCalculatorProvider({ children }) {
  const INITIAL_STATE = {
    bill: "",
    tipPercent: "",
    people: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { bill, people, tipPercent } = formData;
  const billValue = Number(bill);
  const peopleValue = Number(people);
  const tipPercentValue = Number(tipPercent);

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

  const updateForm = (values) => {
    setFormData((pre) => ({ ...pre, ...values }));
  };

  const onFocus = (e) => {
    const length = e.target.value.length;
    e.target.setSelectionRange(length, length);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };
  const value = {
    ...formData,
    tipPerPerson,
    totalPerPerson,
    updateForm,
    onFocus,
    onKeyDown,
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
