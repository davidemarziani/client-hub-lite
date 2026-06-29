import { prisma } from "../../../lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.name || data.name.trim() === "") {
      return Response.json(
        {
          message: "Name is required",
        },
        {
          status: 400,
        }
      );
    }

    const client = await prisma.client.create({
      data: {
        name: data.name.trim(),
        email: data.email?.trim() || null,
        company: data.company?.trim() || null,
        status: data.status || "Prospect",
        notes: data.notes?.trim() || null,
      },
    });

    return Response.json(
      {
        message: "Client created successfully",
        client,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Create client error:", error);

    return Response.json(
      {
        message: "Something went wrong while creating the client",
      },
      {
        status: 500,
      }
    );
  }
}