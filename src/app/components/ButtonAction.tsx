"use client";

import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";

interface ButtonActionProps {
  id: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();
  //eslint-disable-next-line
  //ts-ignore
  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: async () => {
      return await axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      router.push("/");
      router.refresh();
    },
  });
  return (
    <div>
      <Link href={`/edit/${id}`} className="btn mr-2">
        <Pencil />
        Edit
      </Link>
      <button onClick={() => deletePost()} className="btn btn-error">
        {isLoading && <span className="loading loading-spinner"></span>}
        {isLoading ? (
          "Loading ...."
        ) : (
          <>
            <Trash />
            Delete
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonAction;
