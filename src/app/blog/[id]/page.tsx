import React from "react";
import ButtonAction from "../../components/ButtonAction";
import BackButton from "@/app/components/BackButton";
import { FC } from "react";
import { db } from "@/lib/db";

interface BlogDetailsPageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return response;
}

const BlogDetailsPage: FC<BlogDetailsPageProps> = async ({ params }) => {
  const post = await getPost(params.id);

  console.log(post);

  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction id={params.id}/>
      </div>
      <span className="badge badge-neutral">{post?.tag.name}</span>
      <p className="text-slate-700">{post?.content}</p>
    </div>
  );
};

export default BlogDetailsPage;
