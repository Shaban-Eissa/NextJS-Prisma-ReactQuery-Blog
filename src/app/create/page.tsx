"use client";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import FormPost from "../components/FormPost";
import { SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost(data);
  };

  //eslint-disable-next-line
  const { mutate: createPost, isLoading: isLoadingSubmit } = useMutation({
    mutationFn: async (newPost: FormInputPost) => {
      return axios.post("/api/posts/create", newPost);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
    },
  });
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
