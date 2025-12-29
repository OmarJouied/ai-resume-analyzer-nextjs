import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_URL_APP // The base URL of your auth server
})