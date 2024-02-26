import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { search, userId } = await req.json();
  if (!search || !userId)
    return NextResponse.json(
      { error: "Invalid search or user id" },
      { status: 400 }
    );
  try {
    await prisma.UserSearchHistory.create({
      data: {
        search,
        userId,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    if (!user)
      return NextResponse.json({ error: "No user found" }, { status: 404 });
    return NextResponse.json({
      data: user,
      message: "User found",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
