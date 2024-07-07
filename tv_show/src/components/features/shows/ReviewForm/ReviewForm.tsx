import { IReview } from "@/typings/review";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";

interface ReviewFormProps {
  addShowReview: (review: IReview) => void;
}

export const ReviewForm = ({ addShowReview }: ReviewFormProps) => {
  const onClickHandler = () => {
    const commentInput = document.getElementById(
      "comment-input"
    ) as HTMLInputElement;
    const ratingInput = document.getElementById(
      "rating-input"
    ) as HTMLInputElement;

    const newReview: IReview = {
      comment: commentInput.value,
      rating: parseInt(ratingInput.value),
      email: "test@gmail.com",
      avatar: "",
    };

    addShowReview(newReview);
  };

  return (
    <Flex gap={4}>
      <Heading size="md">Reviews</Heading>
      <Input id="comment-input" size="md" placeholder="Add review"></Input>
      <Input id="rating-input" size="md" placeholder="Add rating"></Input>
      <Button variant="solid" colorScheme="white" onClick={onClickHandler}>
        Post
      </Button>
    </Flex>
  );
};
