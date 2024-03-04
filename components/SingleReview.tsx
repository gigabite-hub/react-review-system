import { Review, User } from "@/types/Review";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

interface ReviewsProps {
  reviews: Review[];
}

  const SingleReview: React.FC<ReviewsProps> = ({ reviews }) => {

  let ratingIcons = [];
  for (let index = 0; index < rating; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <div className="flex items-center">
        <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={avatar} alt={username} fill />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {username}
            </h3>
            <p className="text-sm text-body-color">{age}</p>
            <p className="text-sm text-body-color">{occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
