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
	forwardRef,
} from '@chakra-ui/react';
import { ReactElement, ReactNode, useState } from 'react';

interface IPasswordInputProps {
	error?: string;
	component?: ReactElement;
	children: ReactNode;
}

export const PasswordInput = forwardRef(({ error, component, children, ...rest }: IPasswordInputProps, ref) => {
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
					<Input type={visible ? 'text' : 'password'} borderRadius="20px" {...rest} ref={ref} />
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
							? `${children} is required!`
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
});
