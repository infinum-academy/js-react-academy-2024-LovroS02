import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { Flex, Input, Button, Checkbox, IconButton, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IReviewFormProps {
	onFormSubmit: (data: IUpdateReviewFormInputs) => void;
	comment: string;
	rating: number;
}

interface IUpdateReviewFormInputs {
	comment: string;
	rating: number;
}

export const UpdateReviewForm = ({ onFormSubmit, comment, rating }: IReviewFormProps) => {
	const [internalValue, setInternalValue] = useState(rating);
	const [commentValue, setCommentValue] = useState(comment);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IUpdateReviewFormInputs>();

	useEffect(() => {
		setValue('rating', rating);
	}, [rating, setValue]);

	const onChange = (index: number) => {
		setInternalValue(index);
		setValue('rating', index);
	};

	const handleChange = (comment: string) => {
		setCommentValue(comment);
	};

	return (
		<Flex
			as="form"
			gap={3}
			direction="column"
			alignItems="flex-start"
			justifyContent="center"
			id="update-review-form"
			onSubmit={handleSubmit(onFormSubmit)}
		>
			<FormControl isInvalid={Boolean(errors.comment)}>
				<Flex>
					<Input
						{...register('comment', { required: true })}
						type="text"
						height="100px"
						borderRadius="10px"
						bg="white"
						color="black"
						size="md"
						placeholder="Add review"
						value={commentValue}
						onChange={(event) => handleChange(event.target.value)}
						padding="0px 0px 50px 10px"
					/>
					<FormErrorMessage>Comment is required!</FormErrorMessage>
				</Flex>
			</FormControl>
			<FormControl isInvalid={Boolean(errors.rating)}>
				<Flex direction="column">
					<CustomRatingInput
						{...register('rating', { required: true })}
						label="Rating"
						value={internalValue}
						onChange={onChange}
					/>
					<FormErrorMessage>Rating is required!</FormErrorMessage>
				</Flex>
			</FormControl>
		</Flex>
	);
};
