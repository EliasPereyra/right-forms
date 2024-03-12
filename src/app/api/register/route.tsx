import { NextRequest, NextResponse } from "next/server";
import { schema } from "@/registrationSchema";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parsed = schema.safeParse(data);

  if (parsed.success) {
    return NextResponse.json({
      message: "User created",
      user: parsed.data,
    });
  } else {
    return NextResponse.json(
      {
        message: "Invalid data",
        error: parsed.error,
      },
      {
        status: 400,
      }
    );
  }
}
