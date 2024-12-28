import { NextRequest, NextResponse } from "next/server";
import { boxes } from "@/data";

export async function GET(request: NextRequest) {
  const data = boxes;

  return NextResponse.json({ message: "success", data });
}

type PostBody = {
  name: string;
  status: boolean;
};

export async function POST(request: NextRequest) {
  const body: PostBody = await request.json();

  boxes.push({
    id: boxes.length + 1,
    name: body.name,
    status: body.status,
    lan: [],
  });

  return NextResponse.json({ message: "success" });
}
