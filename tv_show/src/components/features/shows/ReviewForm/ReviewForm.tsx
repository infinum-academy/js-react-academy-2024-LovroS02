import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { IReview } from '@/typings/review';
import { Flex, Heading, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface ReviewFormProps {
	addShowReview: (review: IReview) => void;
}

export const ReviewForm = ({ addShowReview }: ReviewFormProps) => {
	const [internalValue, setInternalValue] = useState(0);

	const onClickHandler = () => {
		const commentInput = document.getElementById('comment-input') as HTMLInputElement;
		const ratingInput = internalValue;

		if (!commentInput.value || !ratingInput) {
			return;
		}

		const newReview: IReview = {
			comment: commentInput.value,
			rating: ratingInput,
			email: 'test@gmail.com',
			avatar: '',
		};

		addShowReview(newReview);
	};

	const onChange = (index: number) => {
		setInternalValue(index);
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
			<CustomRatingInput label="Rating" value={internalValue} onChange={onChange} />
			<Button width="10%" borderRadius="20px" variant="solid" bg="white" color="black" onClick={onClickHandler}>
				Post
			</Button>
		</Flex>
	);
};
