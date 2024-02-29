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
export const GET = async (_) => {
  try {
    const posts = await prisma.user.findMany({
      select: {
        email: true,
        id: true,
        avatar: true,
        name: true,
        posts: {
          select: {
            id: true,
            content: true,
            image: true,
            date: true,
            comments: {
              select: {
                id: true,
                content: true,
                date: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json({ data: posts, status: 200 });
  } catch (error) {
    console.error("An error occurred while fetching the posts:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching the posts" },
      { status: 500 }
    );
  }
};
