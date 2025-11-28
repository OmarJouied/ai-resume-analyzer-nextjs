"use client";

import { loginAction } from "@/actions/auth";
import AuthForm from "./ui/auth-form";

const SigninForm = () => {
  return (
    <AuthForm action={loginAction} />
  )
}

export default SigninForm