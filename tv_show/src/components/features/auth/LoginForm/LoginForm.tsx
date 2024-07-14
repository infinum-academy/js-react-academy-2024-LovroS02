'use client';

import { AppLogo } from '@/components/shared/navigation/AppLogo/AppLogo';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
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

interface ILoginFormInputs {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const { register, handleSubmit } = useForm<ILoginFormInputs>();
	const { trigger, error } = useSWRMutation(swrKeys.signIn, mutator);

	const onSignUp = async (data: ILoginFormInputs) => {
		const response = await trigger(data);

		const client = response.headers.get('client');
		const accessToken = response.headers.get('access-token');
		const uid = response.headers.get('uid');

		localStorage.setItem('authorization-header', JSON.stringify({ client, accessToken, uid }));
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
					Something went wrong, try again
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
			<FormControl isRequired={true}>
				<InputGroup size="md">
					<InputLeftElement>
						<LockIcon />
					</InputLeftElement>
					<Input {...register('password')} required type="password" placeholder="Password" borderRadius="20px" />
				</InputGroup>
			</FormControl>
			<Button type="submit" borderRadius="20px" fontSize={12} bg="white" color="blue" width="100px">
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
