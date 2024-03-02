"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createReview } from "@/api/places";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ReviewForm from "@/components/ReviewForm";
import { v4 as uuidv4 } from 'uuid';

const Page = () => {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addReview']});
      console.log("success bro!")
    }
  });

  const handleAddReview = (review) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...review
    })
  }

  return (
    <>
      <Breadcrumb
        pageName="Places Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
            <ReviewForm onSubmit={handleAddReview} initialValue={{}} />
        </div>
      </section>
    </>
  );
};

export default Page;
