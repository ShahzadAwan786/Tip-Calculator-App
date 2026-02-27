import z from "zod";

export const tipSchema = z.object({
  bill: z.coerce
    .number("Bill must be a number")
    .positive("Bill must be > than 0"),
  people: z.coerce
    .number("Input must be a number")
    .int()
    .positive("Input must be > than 0"),
  customTip: z.coerce
    .number("Tip must be a number")
    .positive("Tip must be greater than 0"),
});
