import prisma from "@/lib/prisma";

/**
 * Handle GET requests for the user API by retrieving and returning the first user record.
 *
 * @returns A Response whose JSON body contains `{ user }` on success, or `{ error }` with HTTP status 500 on failure.
 */
export async function GET() {
  try {
    const user = await prisma.user.findFirst();

    return Response.json({ user });
  } catch (error) {
    console.log({ error });
    return Response.json({ error }, { status: 500 });
  }
}