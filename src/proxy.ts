import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

/**
 * Redirects unauthenticated requests to the sign-in page or allows the request to continue.
 *
 * @param request - The incoming NextRequest; used to derive the original URL for redirection.
 * @returns A NextResponse that redirects to `/sign-in` when no session exists, or a response that continues processing otherwise.
 */
export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/path1", "/path2",], // Specify the routes the middleware applies to
};