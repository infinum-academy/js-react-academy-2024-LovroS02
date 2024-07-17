import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	FormControl,
	InputGroup,
	InputLeftElement,
	Input,
	InputRightElement,
	IconButton,
	FormErrorMessage,
	Flex,
} from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IPasswordInputProps {
	placeholder: string;
	expression: UseFormRegisterReturn<string>;
	error?: string;
	component?: ReactElement;
}

export const PasswordInput = ({ placeholder, expression, error, component }: IPasswordInputProps) => {
	const [visible, setVisible] = useState(false);

	const onClickHandler = () => {
		setVisible(!visible);
	};

	return (
		<FormControl isInvalid={Boolean(error)}>
			<Flex direction="column">
				<InputGroup size="md">
					<InputLeftElement>
						<LockIcon />
					</InputLeftElement>
					<Input {...expression} type={visible ? 'text' : 'password'} placeholder={placeholder} borderRadius="20px" />
					<InputRightElement>
						<IconButton
							icon={visible ? <ViewOffIcon /> : <ViewIcon />}
							aria-label="Show or hide password button"
							onClick={onClickHandler}
							variant="unstyled"
						/>
					</InputRightElement>
				</InputGroup>
				{error ? (
					<FormErrorMessage pl={3}>
						{error === 'required'
							? `${expression.name} is required!`
							: error === 'minLength'
							? 'Password is too short!'
							: 'Passwords are not matching!'}
					</FormErrorMessage>
				) : (
					component
				)}
			</Flex>
		</FormControl>
	);
};
