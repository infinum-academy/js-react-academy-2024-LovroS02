'use client';

import { ShowsListSection } from '@/components/features/shows/ShowsListSection/ShowsListSection';
import { AuthRedirect } from '@/components/shared/navigation/AuthRedirect/AuthRedirect';
import { Flex } from '@chakra-ui/react';

export default function ShowsListPage() {
	return (
		<Flex>
			<AuthRedirect to="/login" condition="isLoggedOut" />
			<ShowsListSection />
		</Flex>
	);
}
