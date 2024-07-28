'use client';

import { AppLogo } from '@/components/shared/navigation/AppLogo/AppLogo';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
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

interface IRegistrationFormInputs {
	email: string;
	password: string;
	password_confirmation: string;
}

export const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<IRegistrationFormInputs>();
	const { trigger, error } = useSWRMutation(swrKeys.signUp, mutator);

	const onSignUp = async (data: IRegistrationFormInputs) => {
		await trigger(data);
	};

	return (
		<Flex
			as="form"
			direction="column"
			onSubmit={handleSubmit(onSignUp)}
			bg="blue"
			color="white"
			height="80vh"
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
					Email is not an email or email has already been taken.
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
				{...{
					...register('password', {
						required: true,
						minLength: 8,
					}),
					placeholder: 'Password',
				}}
				error={errors?.password?.type}
				component={
					<Text pl={3} pt={1} fontSize={10}>
						At least 8 characters
					</Text>
				}
			>
				Password
			</PasswordInput>
			<PasswordInput
				{...{
					...register('password_confirmation', {
						required: true,
						validate: (value) => value === watch('password'),
					}),
					placeholder: 'Confirm password',
				}}
				error={errors?.password_confirmation?.type}
			>
				Confirm password
			</PasswordInput>
			<Button
				isLoading={isSubmitting}
				type="submit"
				borderRadius="20px"
				fontSize={12}
				bg="white"
				color="blue"
				width="100px"
			>
				SIGN UP
			</Button>
			<Text fontSize={12}>
				Already have an Account?{' '}
				<Link href="/login" fontWeight="bold">
					Login
				</Link>
			</Text>
		</Flex>
	);
};
