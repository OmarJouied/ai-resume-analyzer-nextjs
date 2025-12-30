"use client"

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
import { toast } from "sonner"

import { useActionState, useCallback, useEffect } from "react"
import Link from "next/link"
import { CircleCheckIcon, OctagonXIcon } from "lucide-react"
import { Spinner } from "./spinner"
import { AuthActionReturn } from "@/types/auth"
import { redirect } from "next/navigation"



const AuthForm = ({ isSignUp, action }: { isSignUp?: boolean; action: (prev: AuthActionReturn, formData: FormData) => Promise<AuthActionReturn> }) => {

  const handleSubmit = useCallback(async (prev: AuthActionReturn, formData: FormData) => {
    const data: AuthActionReturn = await action(prev, formData);
    const { message } = data;

    if (message) {
      toast[
        data.success ? "success" : "error"
      ](message, {
        icon: data.success ? <CircleCheckIcon className="size-4 text-green-400" /> : <OctagonXIcon className="size-4 text-red-900" />
      });
    }

    if (data.success) {
      redirect('/');
    }

    return data;
  }, [isSignUp]);

  const [state, submit, isPending] = useActionState(
    handleSubmit,
    {
      inputs: {},
      message: '',
      errors: {},
      success: false,
    }
  );

  return (
    <Card className="flex-center flex-col gap-12 w-full sm:w-xl 2xl:w-4xl bg-transparent shadow-none border-0">
      <CardHeader className="w-full">
        <CardTitle className="capitalize text-3xl sm:text-6xl">
          <h1>{isSignUp ? "Create Account" : "Welcome Back"}</h1>
        </CardTitle>
        <CardDescription className="text-gray-600 text-xs sm:text-sm">
          {isSignUp ? "Sign Up to Access App Features" : "Log In to Continue Your Job Journey"}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full p-6 rounded-4xl bg-linear-to-b from-primary/10 to-primary/30 shadow-md shadow-primary/20">
        <form action={submit} className="rounded-4xl bg-primary-foreground flex-center flex-col gap-8 p-5 px-6 sm:px-15">
          <FieldGroup className="gap-7">
            {isSignUp && (
              <Field data-invalid={state?.errors?.name} className="gap-2">
                <FieldLabel htmlFor="name" className="text-gray-600 text-xs sm:text-sm">
                  Username
                </FieldLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  defaultValue={state?.inputs?.name}
                  required
                  className="p-5 px-7 rounded-2xl shadow-sm shadow-primary/20 text-xs sm:text-sm"
                />
                {state?.errors?.name && (
                  <FieldError errors={[{ message: state.errors?.name[0] }]} />
                )}
              </Field>
            )}
            <Field data-invalid={state?.errors?.email} className="gap-2">
              <FieldLabel htmlFor="email" className="text-gray-600 text-xs sm:text-sm">
                Email
              </FieldLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                defaultValue={state?.inputs?.email}
                required
                type="email"
                className="p-5 px-7 rounded-2xl shadow-sm shadow-primary/20 text-xs sm:text-sm"
              />
              {state?.errors?.email && (
                <FieldError errors={[{ message: state.errors?.email[0] }]} />
              )}
            </Field>
            <Field data-invalid={state?.errors?.password} className="gap-2">
              <FieldLabel htmlFor="password" className="text-gray-600 text-xs sm:text-sm">
                Password
              </FieldLabel>
              <Input
                id="password"
                name="password"
                autoComplete="password"
                defaultValue={state?.inputs?.password}
                required
                type="password"
                className="p-5 px-7 rounded-2xl shadow-sm shadow-primary/20 text-xs sm:text-sm"
              />
              {state?.errors?.password && (
                <FieldError errors={[{ message: state.errors?.password[0] }]} />
              )}
            </Field>
            {isSignUp && (
              <Field data-invalid={state?.errors?.confirmPassword} className="gap-2">
                <FieldLabel htmlFor="confirmPassword" className="text-gray-600 text-xs sm:text-sm">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="confirmPassword"
                  defaultValue={state?.inputs?.confirmPassword}
                  required
                  type="password"
                  className="p-5 px-7 rounded-2xl shadow-sm shadow-primary/20 text-xs sm:text-sm"
                />
                {state?.errors?.confirmPassword && (
                  <FieldError errors={[{ message: state.errors?.confirmPassword[0] }]} />
                )}
              </Field>
            )}
          </FieldGroup>
          <Button type="submit" disabled={isPending} className="mt-4 w-full bg-primary/90 hover:bg-primary text-xs sm:text-sm">
            {isSignUp ? "Sign Up" : "Sign In"} {isPending && <Spinner />}
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
