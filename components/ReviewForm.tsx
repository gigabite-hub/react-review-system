import { useState } from "react"

const ReviewForm = ({ onSubmit, initialValue }) => {
  const [review, setReview] = useState({
    comment: initialValue.comment || ""
  });

  const handleChangeInput = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    })
  }

  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={review[label.toLowerCase()]} />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review);
    setReview({
      comment: ""
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Comment')}
      <button type="submit">Submit</button>
    </form>
  )
}

export default ReviewForm