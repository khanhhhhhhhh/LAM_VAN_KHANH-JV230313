
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className='container'>

      <h2>REVIWES TA BÉC CỌP!!!</h2>
      <input/>
      <i class="fa-solid fa-magnifying-glass"></i>
      <Form/>
    </div>
  );
}

export default App;






// import React, { useState } from 'react';

// const ReviewForm = ({ addReview }) => {
//   const [reviewText, setReviewText] = useState('');

//   const handleChange = (e) => {
//     setReviewText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newReview = {
//       text: reviewText,
//       date: new Date().toLocaleDateString(),
//     };
//     addReview(newReview);
//     setReviewText('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea value={reviewText} onChange={handleChange}  cols="30" rows="12" />
//       <button className='buttonFrom' type="submit">Add Review</button>
//     </form>
//   );
// };

// const ReviewItem = ({ review, deleteReview }) => {
//   const handleDelete = () => {
//     deleteReview(review);
//   };

//   return (
//     <div>
//       <p>{review.text}</p>
//       <p>Date: {review.date}</p>
//       <button onClick={handleDelete}>Delete Review</button>
//     </div>
//   );
// };

// const ReviewList = ({ reviews, deleteReview }) => {
//   return (
//     <div>
//       {reviews.map((review) => (
//         <ReviewItem
//           key={review.id}
//           review={review}
//           deleteReview={deleteReview}
//         />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   const [reviews, setReviews] = useState([]);

//   const addReview = (newReview) => {
//     setReviews([...reviews, newReview]);
//   };

//   const deleteReview = (reviewToDelete) => {
//     const updatedReviews = reviews.filter(
//       (review) => review !== reviewToDelete
//     );
//     setReviews(updatedReviews);
//   };

//   return (
//     <div>
//       <h1>Review TA</h1>
//       <ReviewForm addReview={addReview} />
//       <ReviewList reviews={reviews} deleteReview={deleteReview} />
//     </div>
//   );
// };

// export default App;
