import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { deleteReview } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { IReview } from '@/typings/review';
import { Flex, Text, Avatar, Button } from '@chakra-ui/react';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';

interface ReviewItemProps {
	review: IReview;
}

export const ReviewItem = ({ review }: ReviewItemProps) => {
	const authorizationHeader = JSON.parse(localStorage.getItem('authorization-header') || '');

	const { trigger } = useSWRMutation(swrKeys.deleteReview(review.id), deleteReview, {
		onSuccess: () => {
			mutate(swrKeys.getReviews(review.show_id));
		},
	});

	const onDelete = async () => {
		await trigger();
	};

	return (
		<Flex bg="blue" direction="column" padding="20px" gap={4} borderRadius="10px">
			<Flex justifyContent="space-between" alignItems="center">
				<Text>{review.user?.email}</Text>
				<Avatar src={review.user?.image_url} bg="darkblue" />
			</Flex>
			<Text>{review.comment}</Text>
			<CustomRatingInput label={review.rating + '/5'} value={review.rating} />
			{authorizationHeader.uid === review.user?.email ? (
				<Button width="15%" bg="white" color="black" variant="solid" borderRadius="20px" onClick={onDelete}>
					Remove
				</Button>
			) : (
				<></>
			)}
		</Flex>
	);
};
