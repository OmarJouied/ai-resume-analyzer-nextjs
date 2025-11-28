"use server";

import { account, ID } from "@/lib/appwrite";
import { redirect } from "next/navigation";

// export const loginAction = async (email: string, password: string) => {
//   try {
//     const session = await account.createEmailPasswordSession(email, password);
//     return { success: true, session };
//   } catch (error) {
//     return { success: false, error };
//   }
// }

export const loginAction = async (prev, formData) => {
  return {
    ...prev,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    errors: {
      email: 'other',
      password: 'change',
    },
  };
};

export const registerAction = async (email: string, password: string, name: string) => {
  try {

    await account.create({
      userId: ID.unique(),
      email,
      password,
      name
    });

    //    redirect('/verify');

    return { success: true };

  } catch (error) {
    return { success: false, error };
  }
}