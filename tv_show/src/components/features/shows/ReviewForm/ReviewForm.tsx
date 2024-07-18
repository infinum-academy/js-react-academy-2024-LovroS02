import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { createReview } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { Flex, Heading, Input, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';

interface IReviewFormProps {
	id: string;
}

interface IReviewFormInputs {
	comment: string;
	rating: number;
}

export const ReviewForm = ({ id }: IReviewFormProps) => {
	const authorizationHeader = JSON.parse(localStorage.getItem('authorization-header') || '');
	const [internalValue, setInternalValue] = useState(0);

	const { trigger } = useSWRMutation(swrKeys.createReview, createReview, {
		onSuccess: () => {
			mutate(swrKeys.getReviews(id));
		},
	});

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<IReviewFormInputs>();

	const onClickHandler = async (data: IReviewFormInputs) => {
		if (authorizationHeader) {
			await trigger({ ...data, show_id: id });
		}
	};

	const onChange = (index: number) => {
		setInternalValue(index);
		setValue('rating', index);
	};

	return (
		<Flex direction="column" as="form" gap={4} width="60%" onSubmit={handleSubmit(onClickHandler)}>
			<Heading mt="10px" borderRadius="10px" color="white" size="lg">
				Reviews
			</Heading>
			<FormControl isInvalid={Boolean(errors.comment)}>
				<Flex direction="column">
					<Input
						{...register('comment', { required: true })}
						type="text"
						height="100px"
						borderRadius="10px"
						bg="white"
						color="black"
						size="md"
						placeholder="Add review"
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
			<Button
				isLoading={isSubmitting}
				width="10%"
				borderRadius="20px"
				variant="solid"
				bg="white"
				color="black"
				type="submit"
			>
				Post
			</Button>
		</Flex>
	);
};
