import { IReview, IReviewList } from "@/typings/review";
import { Fragment, useEffect, useState } from "react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";

const mockReviewList: IReviewList = {
  reviews: [],
};

export const ShowReviewSection = () => {
  const [reviewList, setReviewList] = useState(mockReviewList);

  useEffect(() => {
    const loadedReviewList = loadFromLocalStorage();
    setReviewList(loadedReviewList);
  }, []);

  const saveToLocalStorage = (reviewList: IReviewList) => {
    localStorage.setItem("reviewlist", JSON.stringify(reviewList));
  };

  const loadFromLocalStorage = () => {
    const reviewListString = localStorage.getItem("reviewlist");
    if (!reviewListString) {
      return reviewList;
    }

    return JSON.parse(reviewListString);
  };

  const onDeleteReview = (reviewToRemove: IReview) => {
    const newReviewList = {
      reviews: reviewList.reviews.filter((review) => review !== reviewToRemove),
    };

    setReviewList(newReviewList);
    saveToLocalStorage(newReviewList);
  };

  const addReview = (review: IReview) => {
    const newReviewList = {
      reviews: [...reviewList.reviews, review],
    };

    setReviewList(newReviewList);
    saveToLocalStorage(newReviewList);
  };

  return (
    <Fragment>
      <ReviewList
        reviewList={reviewList}
        onDeleteReview={onDeleteReview}
      ></ReviewList>
      <ReviewForm addShowReview={addReview}></ReviewForm>
    </Fragment>
  );
};
