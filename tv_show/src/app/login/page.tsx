import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { Flex } from "@chakra-ui/react";

export default function Login() {
	return (
		<Flex bg="darkblue" width="100%" height="100vh" alignItems="center" justifyContent="center">
            <LoginForm />
		</Flex>
	);
}
