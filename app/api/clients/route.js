import { prisma } from "../../../lib/prisma";

export async function POST(request) {
  const data = await request.json();

  const client = await prisma.client.create({
    data: {
      name: data.name,
      email: data.email || null,
      company: data.company || null,
      status: data.status || "Prospect",
      notes: data.notes || null,
    },
  });

  return Response.json({
    message: "Client created successfully",
    client,
  });
}