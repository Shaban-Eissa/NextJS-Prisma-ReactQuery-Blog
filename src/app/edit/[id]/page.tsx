"use client";

import React, { FC } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { useRouter } from "next/navigation";

import { SubmitHandler } from "react-hook-form";

import { FormInputPost } from "@/types";

import FormPost from "@/app/components/FormPost";

interface EditPageProps {
  params: {
    id: string;
  };
}

const EditPage: FC<EditPageProps> = ({ params }) => {
  const router = useRouter();
  const { data: dataPost, isLoading } = useQuery({
    queryKey: ["posts", params.id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${params.id}`);
      return response.data;
    },
  });

  const mutation = useMutation<
    FormInputPost,
    AxiosError,
    FormInputPost,
    unknown
  >({
    mutationFn: (newPost: FormInputPost) =>
      axios
        .patch(`/api/posts/${params.id}`, newPost)
        .then((response) => response.data),
    onError: (error: AxiosError) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const { mutate: updatePost, status } = mutation;

  const isLoadingSubmit = status === "pending";

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    updatePost(data);
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
      <FormPost
        submit={handleEditPost}
        initialValue={dataPost}
        isEditing={true}
        isLoadingSubmit={isLoadingSubmit}
      />
    </div>
  );
};

export default EditPage;
