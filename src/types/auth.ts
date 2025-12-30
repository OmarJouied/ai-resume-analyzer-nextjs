import z from "zod";
import { signInSchema, signUpSchema } from "@/schemas/auth";

export type TSignin = z.infer<typeof signInSchema>;
export type TSignup = z.infer<typeof signUpSchema>;

export type AuthActionReturn = {
  inputs?: Record<string, string>;
  message?: string;
  errors?: Record<string, string[]>;
  success: boolean;
};