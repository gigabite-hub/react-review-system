"use client";
import React from "react";
import { Review } from "@/types/Review";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import { fetchPlaces, createReview } from "@/api/places";
import { usePathname } from "next/navigation";
import ReviewForm from "@/components/ReviewForm";
import { v4 as uuidv4 } from 'uuid';
import NewsLatterBox from "@/components/Contact/NewsLatterBox";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

interface ReviewsProps {
  reviews: Review[];
}

const Page: React.FC<ReviewsProps> = () => {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const {
    isPending,
    error,
    data: reviews,
    isLoading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchPlaces,
  });

  const createPostMutation = useMutation<any, Error, { placeID: any, newReview: any }>({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addReview'] });
      console.log("Success!");
    },
  });
  if (isLoading) return "Loading...";
  const filteredReviews = reviews.filter((review) => review.slug === slug);
  console.log(" ~ page ~ filteredReviews:", filteredReviews);

  const handleAddReview = (review) => {
    const placeID = filteredReviews[0].placeID;
    console.log("placeID", placeID)
    createPostMutation.mutate({
      placeID,
      newReview: {
        id: uuidv4(),
        ...review,
      },
    });
  };

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
      <section  className="overflow-hidden py-16 md:py-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Add Review
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                 Add your valuable comment!
              </p>
              <ReviewForm onSubmit={handleAddReview} initialValue={{}} />
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Page;
