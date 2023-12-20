"use client";

import React, { FC } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Pencil, Trash } from "lucide-react";

interface ButtonActionProps {
  id: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();

  const mutation = useMutation({
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

  const { mutate: deletePost, status } = mutation;

  const isLoading = status === "pending";
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
