import { z } from "zod";

export const schema = z.object({
  firstName: z
    .string()
    .trim()
    .max(25)
    .min(2, { message: "You should write a name" }),
  lastName: z
    .string()
    .trim()
    .max(25)
    .min(2, { message: "You should write a name" }),
  email: z
    .string()
    .trim()
    .email({ message: "You should insert an email address" }),
});
