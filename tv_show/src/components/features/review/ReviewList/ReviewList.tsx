import { IReview, IReviewList } from "@/typings/review";
import { Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface ReviewListProps {
  reviewList: IReviewList;
  onDeleteReview: (review: IReview) => void;
}

export const ReviewList = ({ reviewList, onDeleteReview }: ReviewListProps) => {
  return (
      <Flex mt={4} direction="column" gap={4} color="white" width="60%">
        {reviewList.reviews.map((review, index) => {
          return (
            <ReviewItem
              review={review}
              onDelete={onDeleteReview}
              key={index}
            ></ReviewItem>
          );
        })}
      </Flex>
  );
};
