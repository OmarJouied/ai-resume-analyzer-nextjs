"use client";

import { registerAction } from "@/actions/auth";
import AuthForm from "../ui/auth-form";

const SignupForm = () => {
  return (
    <AuthForm isSignUp action={registerAction} />
  )
}

export default SignupForm