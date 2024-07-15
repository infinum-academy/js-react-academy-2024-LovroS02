import { LogoutForm } from '@/components/features/auth/LogoutForm/LogoutForm';
import { AuthRedirect } from '@/components/shared/navigation/AuthRedirect/AuthRedirect';

export default function Logout() {
	return (
		<>
			<AuthRedirect to="/login" condition="isLoggedOut" />
            <LogoutForm />
		</>
	);
}
