'use client';

import { AppLogo } from '@/components/shared/navigation/AppLogo/AppLogo';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { useUser } from '@/hooks/useUser';
import { LockIcon } from '@chakra-ui/icons';
import {
	Alert,
	Avatar,
	Button,
	Container,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Text,
} from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { PasswordInput } from '../components/PasswordInput/PasswordInput';
import { register } from 'module';

interface ILoginFormInputs {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const { register, handleSubmit, formState } = useForm<ILoginFormInputs>();
	const { mutate } = useUser();
	const { trigger, error } = useSWRMutation(swrKeys.signIn, mutator, {
		onSuccess: (data) => {
			mutate(data.response, { revalidate: false });
		},
	});

	const onSignUp = async (data: ILoginFormInputs) => {
		const responseObject = await trigger(data);

		localStorage.setItem(
			'authorization-header',
			JSON.stringify({
				client: responseObject.client,
				accessToken: responseObject.accessToken,
				uid: responseObject.uid,
			})
		);
	};

	return (
		<Flex
			as="form"
			direction="column"
			onSubmit={handleSubmit(onSignUp)}
			bg="blue"
			color="white"
			height="400px"
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
			<FormControl isRequired={true}>
				<InputGroup size="md">
					<InputLeftElement>
						<Avatar size="xs" bg="blue" />
					</InputLeftElement>
					<Input {...register('email')} required type="email" placeholder="Email" borderRadius="20px" />
				</InputGroup>
			</FormControl>
			<PasswordInput
				placeholder="Password"
				expression={register('password')}
			/>
			<Button
				isLoading={formState.isSubmitting ? true : false}
				type="submit"
				borderRadius="20px"
				fontSize={12}
				bg="white"
				color="blue"
				width="100px"
			>
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
