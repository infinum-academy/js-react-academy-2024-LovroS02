import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { IReview } from '@/typings/review';
import { Flex, Heading, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface ReviewFormProps {
	addShowReview: (review: IReview) => void;
}

export const ReviewForm = ({ addShowReview }: ReviewFormProps) => {
	const [internalValue, setInternalValue] = useState(0);
	const [commentValue, setCommentvalue] = useState('');

	const onClickHandler = () => {
		const commentInput = commentValue;
		const ratingInput = internalValue;

		if (!commentInput || !ratingInput) {
			return;
		}

		const newReview: IReview = {
			comment: commentInput,
			rating: ratingInput,
			email: 'test@gmail.com',
			avatar: '',
		};

		addShowReview(newReview);
	};

	const onChange = (index: number) => {
		setInternalValue(index);
	};

	const onChangeComment = (value: string) => {
		setCommentvalue(value);
	};

	return (
		<Flex direction="column" as="form" gap={4} width="60%" onSubmit={onClickHandler}>
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
				onChange={(event) => onChangeComment(event.target.value)}
			/>
			<CustomRatingInput label="Rating" value={internalValue} onChange={onChange} />
			<Button width="10%" borderRadius="20px" variant="solid" bg="white" color="black" type='submit'>
				Post
			</Button>
		</Flex>
	);
};
