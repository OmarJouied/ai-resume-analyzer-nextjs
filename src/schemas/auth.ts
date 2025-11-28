import * as z from "zod";

export const signInSchema = z.object({
  email: z
    .email()
    .min(1, "Email is Required."),
  password: z.string().min(8, "Password must be at least 8 characters."),
})

export const signUpSchema = signInSchema.extend({
  // extends signInSchema with additional fields
  name: z
    .string()
    .min(2, "the Name must be at least 2 characters.")
    .max(25, "the Name must be at most 25 characters."),
  confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})
