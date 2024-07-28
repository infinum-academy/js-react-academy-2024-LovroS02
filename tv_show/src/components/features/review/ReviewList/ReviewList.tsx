import { IReview } from '@/typings/review';
import { Flex } from '@chakra-ui/react';
import { ReviewItem } from '../ReviewItem/ReviewItem';

interface ReviewListProps {
	reviewList: Array<IReview>;
}

export const ReviewList = ({ reviewList }: ReviewListProps) => {
	return (
		<Flex
			direction="column"
			gap={{ base: '16px', sm: '16px', md: '24px' }}
			color="white"
			pt={{ base: '32px', sm: '32px', md: '60px' }}
			pl={{ md: '170px' }}
		>
			{reviewList.map((review, index) => {
				return <ReviewItem review={review} key={index} />;
			})}
		</Flex>
	);
};
