"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCompanies } from "@/api/reviews";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleTestimonial from "@/components/Testimonials/SingleTestimonial";

const page = () => {
  const {
    isPending,
    error,
    data: companies,
    isLoading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchCompanies,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("🚀 ~ page ~ companies:", companies);
  return (
    <>
      <Breadcrumb
        pageName="Review Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companies?.map((item) => (
              <>
                <SingleTestimonial key={item.name} testimonial={item} />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
