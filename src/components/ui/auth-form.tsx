"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useActionState } from "react"
import Link from "next/link"

type ActionReturn = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: Record<string, string>;
};

const AuthForm = ({ isSignUp, action }: { isSignUp?: boolean; action: (prev: Record<string, string>, formData: FormData) => Promise<ActionReturn> }) => {
  const [state, submit, isPending] = useActionState(action, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {} as Record<string, string>,
  });

  return (
    <Card className="flex-center flex-col gap-12 w-full sm:w-xl 2xl:w-4xl bg-transparent shadow-none border-0">
      <CardHeader className="w-full">
        <CardTitle className="capitalize text-3xl sm:text-6xl">{isSignUp ? "Create Account" : "Welcome Back"}</CardTitle>
        <CardDescription className="text-gray-600 text-xs sm:text-sm">
          {isSignUp ? "Sign Up to Access App Features" : "Log In to Continue Your Job Journey"}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full p-6 rounded-4xl bg-linear-to-b from-primary/10 to-primary/30 shadow-md shadow-primary/20">
        <form action={submit} className="rounded-4xl bg-primary-foreground flex-center flex-col gap-8 p-5 px-6 sm:px-15">
          <FieldGroup className="gap-7">
            {isSignUp && (
              <Field data-invalid={state.errors.username} className="gap-2">
                <FieldLabel htmlFor="username" className="text-gray-600 text-xs sm:text-sm">
                  Username
                </FieldLabel>
                <Input
                  id="username"
                  autoComplete="username"
                  required
                  className="p-5 px-7 rounded-2xl shadow-sm shadow-primary/20 text-xs sm:text-sm"
                />
                {state.errors.username && (
                  <FieldError errors={[{ message: state.errors.username }]} />
                )}
              </Field>
            )}
            <Field data-invalid={state.errors.email} className="gap-2">
              <FieldLabel htmlFor="email" className="text-gray-600 text-xs sm:text-sm">
                Email
              </FieldLabel>
              <Input
                id="email"
                autoComplete="email"
                required
                type="email"
                className="p-5 px-7 rounded-2xl shadow-sm shadow-primary/20 text-xs sm:text-sm"
              />
              {state.errors.email && (
                <FieldError errors={[{ message: state.errors.email }]} />
              )}
            </Field>
            <Field data-invalid={state.errors.password} className="gap-2">
              <FieldLabel htmlFor="password" className="text-gray-600 text-xs sm:text-sm">
                Password
              </FieldLabel>
              <Input
                id="password"
                autoComplete="password"
                required
                type="password"
                className="p-5 px-7 rounded-2xl shadow-sm shadow-primary/20 text-xs sm:text-sm"
              />
              {state.errors.password && (
                <FieldError errors={[{ message: state.errors.password }]} />
              )}
            </Field>
            {isSignUp && (
              <Field data-invalid={state.errors.confirmPassword} className="gap-2">
                <FieldLabel htmlFor="confirmPassword" className="text-gray-600 text-xs sm:text-sm">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                  required
                  type="password"
                  className="p-5 px-7 rounded-2xl shadow-sm shadow-primary/20 text-xs sm:text-sm"
                />
                {state.errors.confirmPassword && (
                  <FieldError errors={[{ message: state.errors.confirmPassword }]} />
                )}
              </Field>
            )}
          </FieldGroup>
          <Button type="submit" disabled={isPending} className="mt-4 w-full bg-primary/90 hover:bg-primary text-xs sm:text-sm">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <FieldDescription className="text-xs sm:text-sm">
          {isSignUp ? 'Already' : 'Don’t'} have an account?
          {' '}
          <Link href={isSignUp ? '/sign-in' : '/sign-up'} className="text-primary">{isSignUp ? "Sign In" : "Sign Up"}</Link>
        </FieldDescription>
      </CardFooter>
    </Card>
  )
}

export default AuthForm
