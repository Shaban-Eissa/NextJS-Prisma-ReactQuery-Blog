import Link from "next/link";
import React from "react";
import { FC } from "react";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    content: string;
    tag: string;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { id, title, content, tag } = post;
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title.slice(0, 18)}...</h2>
        <p>{content.slice(0, 30)}...</p>
        <div className="card-actions justify-end">
          <span className="badge badge-neutral">
            {/* esling-disable-next-line */}
            {tag.name}
          </span>
          <Link href={`/blog/${id}`} className="hover:underline">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
