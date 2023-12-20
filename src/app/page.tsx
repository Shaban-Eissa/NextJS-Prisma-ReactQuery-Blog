import { db } from "@/lib/db";

import PostCard from "./components/PostCard";

export const dynamic = "force-dynamic";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

type Tag = {
  id: string;
  name: string;
};

type Post = {
  id: string;
  title: string;
  content: string;
  tag: Tag;
};

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map((post) => {
        const newPost: Post = {
          id: post.id,
          title: post.title,
          content: post.content,
          tag: post.tag,
        };
        return <PostCard key={newPost.id} post={newPost} />;
      })}
    </main>
  );
}
