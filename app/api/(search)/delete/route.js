import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { id } = await req.json();
  try {
    await prisma.userSearchHistory.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ status: 200, data: "Deleted" });
  } catch (error) {
    return NextResponse.json({ status: 500, error: error.message });
  }
};
