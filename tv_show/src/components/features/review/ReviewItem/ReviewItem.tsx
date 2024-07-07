import { IReview } from "@/typings/review";
import { Flex, Text, Avatar, Button } from "@chakra-ui/react";

interface ReviewItemProps {
  review: IReview;
  onDelete: (review: IReview) => void;
}

export const ReviewItem = ({ review, onDelete }: ReviewItemProps) => {
  return (
    <Flex
      bg="blue"
      direction="column"
      padding="20px"
      gap={4}
      borderRadius="10px"
    >
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Text>{review.email}</Text>
        <Avatar src={review.avatar} bg="darkblue"></Avatar>
      </Flex>
      <Text>{review.comment}</Text>
      <Text>{review.rating} / 5</Text>
      <Button
        width="15%"
        bg="white"
        color="black"
        variant="solid"
        onClick={() => onDelete(review)}
        borderRadius="20px"
      >
        Remove
      </Button>
    </Flex>
  );
};
