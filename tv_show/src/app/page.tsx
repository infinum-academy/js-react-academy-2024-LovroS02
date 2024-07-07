"use client";

import { ReviewItem } from "@/components/features/review/ReviewItem/ReviewItem";
import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { IReview } from "@/typings/review";
import styles from "./page.module.css";

export default function Home() {
  const newReview: IReview = {
    email: "bok@gmail.com",
    avatar: "avatar",
    comment: "Dobar show",
    rating: 5,
  }

  const del = (review: IReview) => {
    console.log("Izbriši " + {review});
  }

  return <main className={styles.main}>
    <ReviewItem review={newReview} onDelete={del}></ReviewItem>
  </main>;
}
