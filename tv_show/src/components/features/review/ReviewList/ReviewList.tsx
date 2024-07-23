import { IReview } from '@/typings/review';
import { Flex } from '@chakra-ui/react';
import { ReviewItem } from '../ReviewItem/ReviewItem';

interface ReviewListProps {
	reviewList: Array<IReview>;
}

export const ReviewList = ({ reviewList }: ReviewListProps) => {
	return (
		<Flex mt={4} direction="column" gap={4} color="white" width="60%">
			{reviewList.map((review, index) => {
				return <ReviewItem review={review} key={index} />;
			})}
		</Flex>
	);
};
