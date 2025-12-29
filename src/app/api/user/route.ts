import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const user = await prisma.user.findFirst();

    return Response.json({ user });
  } catch (error) {
    console.log({ error });
    return Response.json({ error }, { status: 500 });
  }
}