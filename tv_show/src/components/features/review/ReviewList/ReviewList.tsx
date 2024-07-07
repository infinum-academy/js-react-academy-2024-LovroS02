import { IReview, IReviewList } from "@/typings/review";
import { Container, Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface ReviewListProps {
  reviewList: IReviewList;
  onDeleteReview: (review: IReview) => void;
}

export const ReviewList = ({ reviewList, onDeleteReview }: ReviewListProps) => {
  return (
    <Container>
      <Flex direction="column" gap={4}>
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
    </Container>
  );
};
