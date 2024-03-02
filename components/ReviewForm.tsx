import { useState } from "react";

const ReviewForm = ({ onSubmit, initialValue }) => {
  const [review, setReview] = useState({
    username: initialValue.username || "",
    age: initialValue.age || "",
    occupation: initialValue.occupation || "",
    rating: initialValue.rating || "",
    comment: initialValue.comment || "",
  });

  const handleChangeInput = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (label, type) => (
    <div>
      <label
        htmlFor={label}
        className="mb-3 block text-sm font-medium text-dark dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={handleChangeInput}
        type={type}
        name={label.toLowerCase()}
        value={review[label.toLowerCase()]}
        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      />
    </div>
  );
//   const renderSelect = (label) => (
//     <div>
//       <label
//         htmlFor={label}
//         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//       >
//         {label}
//       </label>
//       <select onChange={handleChangeInput} name="" id="" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none">
//         <option value={label.toLowerCase()}>{review[label.toLowerCase()]}</option>
//         <option value=""></option>
//       </select>
//     </div>
//   );
  const renderTextArea = (label) => (
    <div>
      <label
        htmlFor={label}
        className="mb-3 block text-sm font-medium text-dark dark:text-white"
      >
        {label}
      </label>
      <textarea
        onChange={handleChangeInput}
        name={label.toLowerCase()}
        value={review[label.toLowerCase()]}
        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      ></textarea>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review);
    setReview({
        username: "",
        age: "",
        occupation: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
      <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">{renderField("Username", "text")}</div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">{renderField("Age", "number")}</div>
        </div>

      </div>
      <div className="flex flex-wrap">
      <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">{renderField("Rating", "number")}</div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">{renderField("Occupation", "text")}</div>
        </div>
      </div>
      <div className="w-full px-4">
          <div className="mb-8">{renderTextArea("Comment")}</div>
        </div>
      <div className="w-full flex justify-end">
        <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
