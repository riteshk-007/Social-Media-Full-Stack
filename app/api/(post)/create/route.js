import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { content, image, userEmail } = await req.json();
  try {
    if (!content || !image || !userEmail) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 400 }
      );
    }
    const post = await prisma.Post.create({
      data: {
        content,
        image,
        userEmail,
      },
    });
    return NextResponse.json({
      message: "Post created successfully",
      post,
      status: 201,
    });
  } catch (error) {
    console.error("An error occurred while creating the post:", error);
    return NextResponse.json(
      { message: "An error occurred while creating the post" },
      { status: 500 }
    );
  }
};
