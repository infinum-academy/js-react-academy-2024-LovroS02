import { RegistrationForm } from '@/components/features/auth/RegistrationForm/RegistrationForm';
import { Container, Flex } from '@chakra-ui/react';

export default function Register() {
	return (
		<Flex bg="darkblue" width="100%" height="100vh" alignItems="center" justifyContent="center">
			<RegistrationForm />
		</Flex>
	);
}
