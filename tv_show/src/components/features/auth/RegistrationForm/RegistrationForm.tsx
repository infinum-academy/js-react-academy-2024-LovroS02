'use client';

import { AppLogo } from '@/components/shared/navigation/AppLogo/AppLogo';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { LockIcon } from '@chakra-ui/icons';
import {
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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';

interface IRegistrationFormInputs {
	email: string;
	password: string;
	password_confirmation: string;
}

export const RegistrationForm = () => {
	const [pass, setPass] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [selectedPass, setSelectedPass] = useState(false);
	const [selectedConfirmPass, setSelectedConfirmPass] = useState(false);

	const { register, handleSubmit } = useForm<IRegistrationFormInputs>();
	const { trigger } = useSWRMutation(swrKeys.signUp, mutator);

	const onSignUp = async (data: IRegistrationFormInputs) => {
		if (data.password === data.password_confirmation && data.password.length >= 8) {
			await trigger(data);
		}
	};

	return (
		<Flex
			as="form"
			direction="column"
			onSubmit={handleSubmit(onSignUp)}
			bg="blue"
			color="white"
			height="500px"
			width="400px"
			alignItems="center"
			borderRadius="20px"
			padding={4}
			justifyContent="center"
			gap={10}
			justifyItems="center"
		>
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
					<Input
						{...register('password')}
						required
						type="password"
						placeholder="Password"
						borderRadius="20px"
						onChange={(event) => {
							setPass(event.target.value);
							setSelectedPass(true);
						}}
					/>
				</InputGroup>
				<Text pl={3} pt={1} fontSize={10}>
					At least 8 characters
				</Text>
				{pass.length < 8 && selectedPass && (
					<FormHelperText pl={3} fontSize={15} color="red">
						Password has less than 8 characters...
					</FormHelperText>
				)}
			</FormControl>
			<FormControl isRequired={true}>
				<InputGroup size="md">
					<InputLeftElement>
						<LockIcon />
					</InputLeftElement>
					<Input
						{...register('password_confirmation')}
						required
						type="password"
						placeholder="Confirm password"
						borderRadius="20px"
						onChange={(event) => {
							setConfirmPass(event.target.value);
							setSelectedConfirmPass(true);
						}}
					/>
				</InputGroup>
				{pass !== confirmPass && selectedConfirmPass && (
					<FormHelperText pl={3} fontSize={15} color="red">
						Passwords are not matching...
					</FormHelperText>
				)}
			</FormControl>
			<Button type="submit" borderRadius="20px" fontSize={12} bg="white" color="blue" width="100px">
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
