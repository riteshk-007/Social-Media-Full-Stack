import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, image } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        image,
      },
    });
    return NextResponse.json({
      user,
      message: "User created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "User not created",
      status: 400,
      error,
    });
  }
};
