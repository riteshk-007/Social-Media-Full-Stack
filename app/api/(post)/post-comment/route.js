import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { postId, userEmail, content } = await req.json();
  try {
    const postcomment = await prisma.comment.create({
      data: {
        content,
        postId,
        userEmail,
      },
    });
    return NextResponse.json({
      data: postcomment,
      message: "Comment added successfully",
    });
  } catch (error) {
    return NextResponse.json({
      error,
      message: "Error adding comment",
    });
  }
};
