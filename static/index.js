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

  return JSON.parse(reviewsString) || [];
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

  const ratingStarsElement = document.createElement("div");
  ratingStarsElement.id = "rating-stars";
  for (let i = 1; i <= 5; i++) {
    const ratingStar = document.createElement("span");
    ratingStar.textContent = "☆";
    if (i <= review.rating) {
      ratingStar.style.color = "gold";
    }
    ratingStarsElement.appendChild(ratingStar);
  }
  reviewRatingElement.appendChild(ratingStarsElement);

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
  const ratingInputList = document.querySelectorAll(".star");
  let ratingValue = 0;
  ratingInputList.forEach((ratingInput) => {
    if (ratingInput.style.color === "gold") {
      ratingInput.style.color = "gray";
      ratingValue += 1;
    }
  });

  if (!reviewInput.value || !ratingValue) {
    return;
  }

  const newReview = {
    review: reviewInput.value,
    rating: ratingValue,
  };

  reviewsList.push(newReview);
  renderReviewsList();
  reviewInput.value = "";
};

function calculateAverageRating() {
  let averageRating = 0;
  reviewsList.forEach((review) => {
    averageRating += parseInt(review.rating);
  });
  if (reviewsList.length > 0) {
    averageRating /= reviewsList.length;
    averageRating = averageRating.toPrecision(2);
  }

  const averageRatingElement = document.getElementById("average-rating");
  if (averageRating > 0) {
    if (parseInt(averageRating.toString()[2]) === 0) {
      averageRatingElement.textContent = averageRating.toString()[0] + " / 5";
    } else {
      averageRatingElement.textContent = averageRating + " / 5";
    }
  } else {
    averageRatingElement.textContent = "There are no ratings currently.";
  }
}

const addRating = (id) => {
  const value = id.split("-")[1];
  const ratingStarElements = document.querySelectorAll(".star");

  ratingStarElements.forEach((ratingStar) => {
    if (parseInt(ratingStar.id.split("-")[1]) <= value) {
      ratingStar.style.color = "gold";
    } else {
      ratingStar.style.color = "gray";
    }
  });
};

reviewsList = loadFromLocalStorage();
renderReviewsList();
