"use client";

import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { IReview } from "@/typings/review";
import styles from "./page.module.css";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  const calculateAverageRating = () => {
    const reviewListString = localStorage.getItem("reviewlist");
    if (!reviewListString) {
      return 0;
    }

    const reviewList = JSON.parse(reviewListString);
    let averageRating = 0;
    reviewList.reviews.forEach((review: IReview) => {
      averageRating += review.rating;
    });

    return averageRating / reviewList.reviews.length;
  };

  return (
    <main className={styles.main}>
      <Heading mb="20px" color="white" size="xl">TV Shows App</Heading>
      <ShowDetails
        show={{
          imageUrl: "Brooklyn_nine_nine.png",
          title: "Brooklyn Nine-nine",
          averageRating: calculateAverageRating(),
          description: "Bok",
        }}
      ></ShowDetails>
      <ShowReviewSection></ShowReviewSection>
    </main>
  );
}
