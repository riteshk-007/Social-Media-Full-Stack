import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userEmail } = await req.json();
  try {
    const history = await prisma.UserSearchHistory.findMany({
      where: {
        userEmail: userEmail,
      },
    });
    if (!history)
      return NextResponse.json({ status: 404, data: "No history found" });
    return NextResponse.json({
      status: 200,
      data: history,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, error: error.message });
  }
};
