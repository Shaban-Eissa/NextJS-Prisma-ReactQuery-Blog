"use client";

import FormPost from "@/app/components/FormPost";
import { FormInputPost } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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

  //eslint-disable-next-line
  //ts-ignore
  const { mutate: updatePost, isLoading: isLoadingSubmit } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.patch(`/api/posts/${params.id}`, newPost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

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
