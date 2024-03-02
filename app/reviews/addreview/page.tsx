"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaces } from "@/api/places";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Page = () => {

  return (
    <>
      <Breadcrumb
        pageName="Places Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
