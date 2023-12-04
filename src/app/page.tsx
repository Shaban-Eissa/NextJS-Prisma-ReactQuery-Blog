import Image from "next/image";
import PostCard from "./components/PostCard";
import { db } from "@/lib/db";


async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true
    },
   
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map((post) => (
        //eslint-disable-next-line
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
