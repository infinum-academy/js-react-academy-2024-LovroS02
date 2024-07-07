import { IReview } from "@/typings/review";
import { Flex, Text, Avatar, Button } from "@chakra-ui/react";

interface ReviewItemProps {
  review: IReview;
  onDelete: (review: IReview) => void;
}

export const ReviewItem = ({ review, onDelete }: ReviewItemProps) => {
  return (
    <Flex direction="column" gap={4}>
      <Flex direction="row" justifyContent="space-between">
        <Text>{review.email}</Text>
        <Avatar src={review.avatar} bg="darkblue"></Avatar>
      </Flex>
      <Text>{review.comment}</Text>
      <Text>{review.rating}</Text>
      <Button
        colorScheme="white"
        variant="solid"
        onClick={() => onDelete(review)}
      >
        Remove
      </Button>
    </Flex>
  );
};
