import { schema } from "@/registrationSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const data = Object.fromEntries(body);

  const parsedData = schema.safeParse(data);

  if (parsedData.success) {
    return NextResponse.json({
      message: "User registered",
    });
  } else {
    return NextResponse.json(
      {
        error: parsedData.error,
      },
      { status: 400 }
    );
  }
}
