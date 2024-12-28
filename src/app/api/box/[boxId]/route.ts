import { NextRequest, NextResponse } from "next/server";
import { boxes } from "@/data";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ boxId: string }> },
) {
  const { boxId } = await params;
  const boxIndex = boxes.findIndex((box) => box.id === Number(boxId)); // Tìm index của box

  if (boxIndex === -1) {
    return NextResponse.json(
      {
        message: "Box not found",
      },
      { status: 404 },
    );
  }

  try {
    const body = await request.json();
    const updatedBox = { ...boxes[boxIndex], ...body };
    boxes[boxIndex] = updatedBox;

    return NextResponse.json({
      message: "Box updated",
      data: updatedBox,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error updating box",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ boxId: string }> },
) {
  const { boxId } = await params;

  const boxIndex = boxes.findIndex((box) => box.id === Number(boxId)); // Tìm index của box

  if (boxIndex === -1) {
    return new Response("Box not found", { status: 404 });
  }

  boxes.splice(boxIndex, 1);

  return NextResponse.json({
    message: "Box deleted",
  });
}
