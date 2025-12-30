import { createAuthClient } from "better-auth/react"
import { env } from "./env"

const { NEXT_PUBLIC_URL_APP } = env;

export const authClient = createAuthClient({
  baseURL: NEXT_PUBLIC_URL_APP // The base URL of your auth server
})