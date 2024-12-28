import { NextRequest, NextResponse } from "next/server";
import { account } from "@/data";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "success", data: account });
}
