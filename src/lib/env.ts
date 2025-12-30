import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APPWRITE_ENDPOINT: z.url(),
  NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_APPWRITE_PROJECT_NAME: z.string().min(1),
  NEXT_PUBLIC_URL_APP: z.url(),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.url(),
  DATABASE_URL: z.url(),
});

export const env = envSchema.parse(process.env);
