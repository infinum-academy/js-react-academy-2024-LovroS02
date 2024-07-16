import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { IReview } from '@/typings/review';
import { Flex, Text, Avatar, Button } from '@chakra-ui/react';

interface ReviewItemProps {
	review: IReview;
	onDelete: (review: IReview) => void;
}

export const ReviewItem = ({ review, onDelete }: ReviewItemProps) => {
	return (
		<Flex bg="blue" direction="column" padding="20px" gap={4} borderRadius="10px">
			<Flex justifyContent="space-between" alignItems="center">
				<Text>{review.email}</Text>
				<Avatar src={review.avatar} bg="darkblue" />
			</Flex>
			<Text>{review.comment}</Text>
			<CustomRatingInput label={review.rating + '/5'} value={review.rating} />
			<Button width="15%" bg="white" color="black" variant="solid" onClick={() => onDelete(review)} borderRadius="20px">
				Remove
			</Button>
		</Flex>
	);
};
