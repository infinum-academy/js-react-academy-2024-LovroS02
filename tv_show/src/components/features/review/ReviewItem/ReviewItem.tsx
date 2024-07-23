import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { deleteReview } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { IReview } from '@/typings/review';
import { Flex, Text, Avatar, Button } from '@chakra-ui/react';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { UpdateReviewButton } from '../UpdateReviewButton/UpdateReviewButton';
import { useUser } from '@/hooks/useUser';
import { ReviewItemOptions } from './components/ReviewItemOptions';

interface IReviewItemProps {
	review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
	const { data } = useUser();

	return (
		<Flex bg="purple.400" padding="28px 0px 28px 40px" gap="80px" borderRadius="24px" alignItems="center">
			<Flex justifyContent="space-between" alignItems="center" gap={5}>
				<Avatar src={review.user?.image_url} bg="purple.400" boxSize={10} />
				<Flex direction="column" gap="6px">
					<Text>{review.user?.email}</Text>
					<CustomRatingInput label={review.rating + '/5'} value={review.rating} />
				</Flex>
			</Flex>
			<Text>{review.comment}</Text>
			{data?.user.email === review.user?.email && <ReviewItemOptions review={review} {...{}} />}
		</Flex>
	);
};
