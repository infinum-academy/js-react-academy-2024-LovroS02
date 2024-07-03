let reviewsList = [
  {
    review: "Cool, cool, cool, cool. No doubt, no doubt, no doubt.",
    rating: 5,
  },
];

function saveToLocalStorage(reviews) {
  const reviewsString = JSON.stringify(reviews);
  localStorage.setItem("reviews-list", reviewsString);
}

function loadFromLocalStorage() {
  const reviewsString = localStorage.getItem("reviews-list");

  return JSON.parse(reviewsString);
}

function renderReviewsList() {
  const reviewRatingListElement = document.getElementById(
    "reviews-ratings-list"
  );
  reviewRatingListElement.innerHTML = "";
  reviewsList.forEach((review) => {
    reviewRatingListElement.appendChild(createReview(review));
  });

  calculateAverageRating();
  saveToLocalStorage(reviewsList);
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

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.onclick = () => {
    reviewsList = reviewsList.filter((r) => {
      return r !== review;
    });
    renderReviewsList();
  };
  reviewRatingElement.appendChild(deleteButton);

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

function calculateAverageRating() {
  let averageRating = 0;
  reviewsList.forEach((review) => {
    averageRating += Number(review.rating);
  });
  if (!reviewsList.length) {
    averageRating = 0;
  } else {
    averageRating /= reviewsList.length;
    averageRating = averageRating.toPrecision(2);
  }

  const averageRatingElement = document.getElementById("average-rating");
  if (averageRating > 0) {
    averageRatingElement.textContent = averageRating + " / 5";
  } else {
    averageRatingElement.textContent = "There are no ratings currently.";
  }
}

reviewsList = loadFromLocalStorage();
renderReviewsList();
