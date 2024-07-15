import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { IReview } from '@/typings/review';
import { Flex, Heading, Input, Button, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IReviewFormProps {
	addShowReview: (review: IReview) => void;
}

interface IReviewFormInputs {
	comment: string;
	rating: number;
	email: 'test@gmail.com';
	avatar: '';
}

export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
	const authorizationHeader = JSON.parse(localStorage.getItem('authorization-header') || '');
	const [internalValue, setInternalValue] = useState(0);

	const { register, handleSubmit, setValue, formState } = useForm<IReviewFormInputs>();

	const onClickHandler = async (data: IReviewFormInputs) => {
		if (!data.comment || !data.rating) {
			return;
		}

		if (authorizationHeader) {
			addShowReview({ ...data, email: authorizationHeader.uid || '' });
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
			<FormControl isRequired={true}>
				<Input
					{...register('comment')}
					required
					type="text"
					height="100px"
					borderRadius="10px"
					bg="white"
					color="black"
					size="md"
					placeholder="Add review"
					padding="0px 0px 50px 10px"
				/>
			</FormControl>
			<FormControl>
				<CustomRatingInput {...register('rating')} label="Rating" value={internalValue} onChange={onChange} />
			</FormControl>
			<Button
				isLoading={formState.isSubmitting ? true : false}
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
