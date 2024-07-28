'use client';

import { AppLogo } from '@/components/shared/navigation/AppLogo/AppLogo';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { useUser } from '@/hooks/useUser';
import {
	Alert,
	Avatar,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { PasswordInput } from '../components/PasswordInput/PasswordInput';

interface ILoginFormInputs {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ILoginFormInputs>();
	const { mutate } = useUser();
	const { trigger, error } = useSWRMutation(swrKeys.signIn, mutator, {
		onSuccess: (data) => {
			mutate(data, { revalidate: false });
		},
	});

	const onSignUp = async (data: ILoginFormInputs) => {
		await trigger(data);
	};

	return (
		<Flex
			as="form"
			direction="column"
			onSubmit={handleSubmit(onSignUp)}
			bg="purple.400"
			color="white"
			height="500px"
			width="500px"
			alignItems="center"
			borderRadius="24px"
			padding="56px 56px 52px 56px"
		>
			{error && (
				<Alert status="error" bg="blue" color="red">
					Invalid login credentials. Please try again.
				</Alert>
			)}
			<AppLogo />
			<FormControl isInvalid={Boolean(errors?.email)} pb="36px">
				<Flex direction="column">
					<InputGroup size="md">
						<InputLeftElement padding="16px 0px 16px 24px">
							<Avatar size="xs" bg="purple.400" />
						</InputLeftElement>
						<Input {...register('email', { required: true })} type="email" placeholder="Email" variant="auth" />
					</InputGroup>
					<FormErrorMessage pl={3}>Email is required!</FormErrorMessage>
				</Flex>
			</FormControl>
			<PasswordInput
				{...{ ...register('password', { required: true }), placeholder: 'Password', variant: 'auth' }}
				error={errors?.password?.type}
			>
				Password
			</PasswordInput>
			<Button isLoading={isSubmitting} type="submit" mt="60px">
				LOG IN
			</Button>
			<Text fontSize={12} pt="28px">
				Don`t have an account?{' '}
				<Link href="/register" fontWeight="bold">
					Register
				</Link>
			</Text>
		</Flex>
	);
};
