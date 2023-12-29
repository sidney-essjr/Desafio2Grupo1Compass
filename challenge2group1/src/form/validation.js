import zod from "zod";

export const createRegistrationFormSchema = zod.object({
  name: zod.string().trim().min(1, "The Plant name field is mandatory!"),
  subtitle: zod.string().trim().min(1, "The Subtitle field is mandatory!"),
  type: zod.string().trim().min(1, "The Type field is mandatory!"),
  price: zod
    .string()
    .transform((val, ctx) =>
      stringToFloat(val, ctx, "The value must be greater than 0", val < 1)
    ),
  discountPercentage: zod
    .string()
    .transform((val, ctx) =>
      stringToFloat(
        val,
        ctx,
        "The value must be 0 or greater than",
        val < 0
      )
    ),
  label: zod.enum(["indoor", "outdoor"], {
    invalid_type_error: "You need to select an option",
    required_error: "You need to select an option",
  }),

  features: zod.string().trim().min(1, "The Features field is mandatory!"),
  description: zod
    .string()
    .trim()
    .min(1, "The Description field is mandatory!"),
});

const stringToFloat = (val, ctx, message, validation) => {
  const parsed = parseFloat(val);
  if (validation) {
    ctx.addIssue({
      code: zod.ZodIssueCode.custom,
      message: message,
    });
    return zod.NEVER;
  }
  return parsed;
};
