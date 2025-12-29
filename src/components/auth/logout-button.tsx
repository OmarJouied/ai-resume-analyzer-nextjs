"use client"

import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation"
import { Button } from "../ui/button"
import { useCallback } from "react"

const LogoutButton = () => {

  const handleLogout = useCallback(async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => redirect('/sign-in'),
      }
    })
  }, []);

  return (
    <Button className="mt-1 w-full" onClick={handleLogout}>Logout</Button>
  )
}

export default LogoutButton