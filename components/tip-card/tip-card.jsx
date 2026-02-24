import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import BillInput from "../input/bill-input";
import PeopleInput from "../input/people-input";

export function TipCard({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 w-230 h-125 m-auto mt-12">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Bill</FieldLabel>
                <BillInput />
              </Field>
              <Button>15%</Button>
              <Field>
                <FieldLabel htmlFor="password">Number of People</FieldLabel>
                <PeopleInput />
              </Field>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block"></div>
        </CardContent>
      </Card>
    </div>
  );
}
