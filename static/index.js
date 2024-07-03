let reviewsList = [
  {
    review: "Cool, cool, cool, cool. No doubt, no doubt, no doubt.",
    rating: 5,
  },
];

function renderReviewsList() {
  const reviewRatingListElement = document.getElementById(
    "reviews-ratings-list"
  );
  reviewRatingListElement.innerHTML = "";
  reviewsList.forEach((review) => {
    reviewRatingListElement.appendChild(createReview(review));
  });
}

function createReview(review) {
  const reviewRatingElement = document.createElement("div");
  reviewRatingElement.id = "review-rating-item";

  const reviewElement = document.createElement("span");
  reviewElement.textContent = review.review;
  reviewRatingElement.appendChild(reviewElement);

  const ratingElement = document.createElement("span");
  ratingElement.textContent = review.rating + " / 5";
  reviewRatingElement.appendChild(ratingElement);

  return reviewRatingElement;
}

const newReviewButtonHandler = () => {
  const reviewInput = document.getElementById("review");
  const ratingInput = document.getElementById("rating");

  if (!reviewInput.value || !ratingInput.value) {
    return;
  }

  const newReview = {
    review: reviewInput.value,
    rating: ratingInput.value,
  };

  reviewsList.push(newReview);
  renderReviewsList();
  reviewInput.value = "";
  ratingInput.value = "";
};

renderReviewsList();
