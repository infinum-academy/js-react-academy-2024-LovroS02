import { CustomRatingInput } from '@/components/shared/input/CustomRatingInput/CustomRatingInput';
import { createReview } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { useUser } from '@/hooks/useUser';
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
	const { data: uid } = useUser();
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
		getValues,
		formState: { errors, isSubmitting },
	} = useForm<IReviewFormInputs>();

	const onClickHandler = async (data: IReviewFormInputs) => {
		if (uid) {
			await trigger({ ...data, show_id: id });
		}
	};

	const onChange = (index: number) => {
		setInternalValue(index);
		setValue('rating', index);
	};

	return (
		<Flex direction="column" as="form" padding="86px 0px 0px 0px" onSubmit={handleSubmit(onClickHandler)}>
			<Flex>
				<Heading borderRadius="10px" color="white">
					Reviews
				</Heading>
				<Flex direction="column" width="100%" pl="26px">
					<FormControl isInvalid={Boolean(errors.comment)}>
						<Flex direction="column">
							<Input
								{...register('comment', { required: true })}
								type="text"
								height="80px"
								width="100%"
								borderRadius="10px"
								bg="white"
								color="purple.700"
								size="md"
								placeholder="Add review"
								_placeholder={{ color: 'purple.200' }}
								padding="28px 40px 28px 40px"
							/>
							<FormErrorMessage>Comment is required!</FormErrorMessage>
						</Flex>
					</FormControl>
					<Flex alignItems="center" pt="22px" pl="40px">
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
							type="submit"
							variant={{ base: 'mobilePostForm', md: 'postForm' }}
							isDisabled={getValues('comment') === '' ? true : getValues('rating') === 0 ? true : false}
						>
							POST
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
