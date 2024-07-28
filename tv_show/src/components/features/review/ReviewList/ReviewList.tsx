import { IReview } from '@/typings/review';
import { Flex } from '@chakra-ui/react';
import { ReviewItem } from '../ReviewItem/ReviewItem';

interface ReviewListProps {
	reviewList: Array<IReview>;
}

export const ReviewList = ({ reviewList }: ReviewListProps) => {
	return (
		<Flex direction="column" gap="24px" color="white" pt={10} pl="158px">
			{reviewList.map((review, index) => {
				return <ReviewItem review={review} key={index} />;
			})}
		</Flex>
	);
};
