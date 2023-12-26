import zod from "zod";

export const createRegistrationFormSchema = zod.object({
  name: zod.string().trim().min(1, "O campo Plant name é obrigatório!"),
  subtitle: zod.string().trim().min(1, "O campo Subtitle é obrigatório!"),
  type: zod.string().trim().min(1, "O campo Plant type é obrigatório!"),
  price: zod
    .string()
    .transform((val, ctx) =>
      stringToFloat(val, ctx, "O valor precisa ser maior que 0", val < 1)
    ),
  discountPercentage: zod
    .string()
    .transform((val, ctx) =>
      stringToFloat(val, ctx, "O valor precisa ser maior ou igual a 0", val < 0)
    ),
  label: zod.string().trim().min(1, "O campo Label é obrigatório!"),
  features: zod.string().trim().min(1, "O campo Features é obrigatório!"),
  description: zod.string().trim().min(1, "O campo Description é obrigatório!"),
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
