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
    <Flex direction="column" gap={4} width="60%">
      <Heading mt="10px" borderRadius="10px" color="white" size="lg">
        Reviews
      </Heading>
      <Input
        height="100px"
        borderRadius="10px"
        bg="white"
        color="black"
        id="comment-input"
        size="md"
        placeholder="Add review"
        padding="0px 0px 50px 10px"
      ></Input>
      <Input
        width="30%"
        borderRadius="10px"
        bg="white"
        color="black"
        id="rating-input"
        size="md"
        placeholder="Add rating"
      ></Input>
      <Button
        width="15%"
        borderRadius="20px"
        variant="solid"
        bg="white"
        color="black"
        onClick={onClickHandler}
      >
        Post
      </Button>
    </Flex>
  );
};
