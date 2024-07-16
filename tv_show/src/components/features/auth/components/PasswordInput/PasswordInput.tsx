import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	FormControl,
	InputGroup,
	InputLeftElement,
	Input,
	InputRightElement,
	IconButton,
	FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IPasswordInputProps {
	placeholder: string;
	expression: UseFormRegisterReturn<string>;
}

export const PasswordInput = ({ placeholder, expression}: IPasswordInputProps) => {
	const [visible, setVisible] = useState(false);

	const onClickHandler = () => {
		setVisible(!visible);
	};

	return (
		<FormControl isRequired={true}>
			<InputGroup size="md">
				<InputLeftElement>
					<LockIcon />
				</InputLeftElement>
				<Input
					{...expression}
					required
					type={visible ? 'text' : 'password'}
					placeholder={placeholder}
					borderRadius="20px"
				/>
				<InputRightElement>
					<IconButton
						icon={visible ? <ViewOffIcon /> : <ViewIcon />}
						aria-label="Show or hide password button"
						onClick={onClickHandler}
						variant="unstyled"
					></IconButton>
				</InputRightElement>
			</InputGroup>
		</FormControl>
	);
};
