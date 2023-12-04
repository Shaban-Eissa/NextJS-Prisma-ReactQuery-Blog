import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function DELETE(req: Request, context: contextProps) {
  try {
    await db.post.delete({
      where: {
        id: context.params.postId,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const body = await req.json();
    await db.post.update({
      where: {
        id: context.params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });

    return NextResponse.json(
      { message: "updated post successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "could not update post" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, context: contextProps) {
  try {
    const post = await db.post.findFirst({
      where: {
        id: context.params.postId,
      },
      include: {
        tag: true,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not find post" },
      { status: 500 }
    );
  }
}
