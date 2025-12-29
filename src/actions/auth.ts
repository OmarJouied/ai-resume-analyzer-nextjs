"use server";

import { auth } from "@/lib/auth";
import { signInSchema, signUpSchema } from "@/schemas/auth";
import { AuthActionReturn, TSignin, TSignup } from "@/types/auth";

export const loginAction = async (_: AuthActionReturn, formData: FormData) => {
  const rawData: TSignin = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  try {

    const { success, data: body, error } = signInSchema.safeParse(rawData);

    if (success === false) {
      return {
        inputs: rawData,
        success: false,
        errors: error.flatten().fieldErrors
      }
    }

    await auth.api.signInEmail({
      body
    });

    return { success: true, message: 'Signed in successfully!' };

  } catch (error) {
    console.log(error);
    return {
      inputs: rawData,
      success: false,
      message: 'Something went wrong. Please try again.'
    };
  }
};

export const registerAction = async (_: AuthActionReturn, formData: FormData) => {
  const rawData: TSignup = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  try {

    const { success, data: body, error } = signUpSchema.safeParse(rawData);

    if (success === false) {
      return {
        inputs: rawData,
        success: false,
        errors: error.flatten().fieldErrors
      }
    }

    await auth.api.signUpEmail({
      body
    });

    //    redirect('/verify');

    return { success: true, message: 'Account created successfully!' };

  } catch (error) {
    console.log(error);
    return {
      inputs: rawData,
      success: false,
      message: 'Something went wrong. Please try again.'
    };
  }
}

export const logoutAction = async (formData: FormData) => {
  await auth.api.signOut();
}