import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { deleteReview } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { IReview } from '@/typings/review';
import { Flex, Text, Avatar, Button } from '@chakra-ui/react';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { UpdateReviewButton } from '../UpdateReviewButton/UpdateReviewButton';
import { useUser } from '@/hooks/useUser';

interface IReviewItemProps {
	review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
	const { data } = useUser();

	const { trigger } = useSWRMutation(swrKeys.deleteReview(review.id), deleteReview, {
		onSuccess: () => {
			mutate(swrKeys.getReviews(review.show_id));
		},
	});

	const onDelete = async () => {
		await trigger();
	};

	return (
		<Flex bg="purple.400" direction="column" padding="20px" gap={4} borderRadius="10px">
			<Flex justifyContent="space-between" alignItems="center">
				<Text>{review.user?.email}</Text>
				<Avatar src={review.user?.image_url} bg="purple.400" />
			</Flex>
			<Text>{review.comment}</Text>
			<CustomRatingInput label={review.rating + '/5'} value={review.rating} />
			{data?.user.email === review.user?.email && (
				<Flex gap={4}>
					<Button width="15%" bg="white" color="black" variant="solid" borderRadius="20px" onClick={onDelete}>
						Remove
					</Button>
					<UpdateReviewButton comment={review.comment} rating={review.rating} id={review.id} show_id={review.show_id} />
				</Flex>
			)}
		</Flex>
	);
};
