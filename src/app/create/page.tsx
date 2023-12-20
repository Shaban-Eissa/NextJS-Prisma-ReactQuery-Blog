"use client";

import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";

import { FormInputPost } from "@/types";

import BackButton from "../components/BackButton";
import FormPost from "../components/FormPost";

const CreatePage = () => {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost(data);
  };

  const mutation = useMutation<
    FormInputPost,
    AxiosError,
    FormInputPost,
    unknown
  >({
    mutationFn: async (newPost: FormInputPost) => {
      return axios.post("/api/posts/create", newPost);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const { mutate: createPost, status } = mutation;

  const isLoadingSubmit = status === "pending";

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
      <FormPost
        isLoadingSubmit={isLoadingSubmit}
        submit={handleCreatePost}
        isEditing={false}
      />
    </div>
  );
};

export default CreatePage;
