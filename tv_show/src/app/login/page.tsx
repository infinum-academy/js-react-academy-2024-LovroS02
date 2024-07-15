import { LoginForm } from '@/components/features/auth/LoginForm/LoginForm';
import { AuthRedirect } from '@/components/shared/navigation/AuthRedirect/AuthRedirect';
import { Flex } from '@chakra-ui/react';

export default function Login() {
	return (
		<>
			<AuthRedirect to="/all-shows" condition="isLoggedIn" />
			<Flex bg="darkblue" width="100%" height="100vh" alignItems="center" justifyContent="center">
				<LoginForm />
			</Flex>
		</>
	);
}
