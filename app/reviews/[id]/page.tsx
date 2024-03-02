"use client";
import React from "react";
import { Review, User } from "@/types/Review";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaces } from "@/api/places";
import { usePathname } from "next/navigation";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

interface ReviewsProps {
  reviews: Review[];
}

const Page: React.FC<ReviewsProps> = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  console.log("🚀 ~ slug:", slug);
  const {
    isPending,
    error,
    data: reviews,
    isLoading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchPlaces,
  });

  if (isLoading) return "Loading...";

  const filteredReviews = reviews.filter((review) => review.slug === slug);

  console.log(" ~ page ~ filteredReviews:", filteredReviews);

  return (
    <>
      <Breadcrumb
        pageName="Review Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          {filteredReviews.length > 0 ? (
            <>
              {filteredReviews.map((item) => (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {item?.reviews?.map((review) => (
                    <div className="w-full">
                      <div
                        className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
                        data-wow-delay=".1s"
                      >
                         <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
                         {review.comment}
                            </p>
                            <div className="mb-5 flex items-center space-x-1">    <span className="me-1">⭐</span> {review.rating}</div>
                        <div className="flex items-center">
                        <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
                                <Image src={review.user.avatar} alt={review.user.username} fill />
                            </div>
                          <div className="w-full">
                            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                              {review.user.username}
                            </h3>
                            <p className="text-sm text-body-color"><b>Occupation: </b> {review.user.occupation}</p>
                            <p className="text-sm text-body-color"><b>Age: </b>{review.user.age}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          ) : (
            <p className="text-center text-gray-500">
              No reviews found for this place.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
