import React, { FC } from "react";
import Link from "next/link";

type Tag = {
  name: string;
};
interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { id, title, content, tag } = post;

  return (
    <div className="card w-full bg-base-100 shadow-xl border mb-8">
      <div className="card-body">
        <h2 className="card-title">{title.slice(0, 13)}...</h2>
        <p>{content.slice(0, 60)}...</p>
        <div className="card-actions justify-end flex-col">
          <span className="badge badge-neutral">{tag.name}</span>
          <Link href={`/blog/${id}`} className="hover:underline">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
