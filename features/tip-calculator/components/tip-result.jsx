import ReusableResultsRow from "@/components/common/reusable-results-row";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TIpResult() {
  return (
    <div className="bg-primary sm:m-4 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
      <div className="space-y-6">
        <ReusableResultsRow label="Tip Amount" value={0.0} />
        <ReusableResultsRow label="Total" value={0.0} />
      </div>
      <Button className="w-full h-12 bg-secondary text-primary text-lg sm:text-xl mt-10 font-bold hover:bg-foreground ">
        RESET
      </Button>
    </div>
  );
}
