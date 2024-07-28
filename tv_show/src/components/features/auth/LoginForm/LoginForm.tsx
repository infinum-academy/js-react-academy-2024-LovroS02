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
			bg="blue"
			color="white"
			height="60vh"
			width="400px"
			alignItems="center"
			borderRadius="20px"
			padding={4}
			justifyContent="center"
			gap={10}
			justifyItems="center"
		>
			{error && (
				<Alert status="error" bg="blue" color="red">
					Invalid login credentials. Please try again.
				</Alert>
			)}
			<AppLogo />
			<FormControl isInvalid={Boolean(errors?.email)}>
				<Flex direction="column">
					<InputGroup size="md">
						<InputLeftElement>
							<Avatar size="xs" bg="blue" />
						</InputLeftElement>
						<Input {...register('email', { required: true })} type="email" placeholder="Email" borderRadius="20px" />
					</InputGroup>
					<FormErrorMessage pl={3}>Email is required!</FormErrorMessage>
				</Flex>
			</FormControl>
			<PasswordInput
				{...{ ...register('password', { required: true }), placeholder: 'Password' }}
				error={errors?.password?.type}
			>
				Password
			</PasswordInput>
			<Button isLoading={isSubmitting} type="submit">
				LOG IN
			</Button>
			<Text fontSize={12}>
				Don`t have an account?{' '}
				<Link href="/register" fontWeight="bold">
					Register
				</Link>
			</Text>
		</Flex>
	);
};
