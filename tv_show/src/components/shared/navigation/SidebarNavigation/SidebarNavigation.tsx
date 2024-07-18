'use client';

import { Flex } from '@chakra-ui/react';
import { SidebarNavigationItem } from '../components/SidebarNavigationItem/SidebarNavigationItem';
import { AppLogo } from '../AppLogo/AppLogo';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { useUser } from '@/hooks/useUser';

export const SidebarNavigation = () => {
	const { data } = useUser();
	const logout = () => {
		localStorage.removeItem('authorization-header');
		mutate(swrKeys.getUser, null, { revalidate: false });
	};

	return (
		<>
			{data ? (
				<Flex direction="column" bg="darkblue" width="300px" padding={6}>
					<AppLogo />
					<Flex direction="column" gap={4} mt={8} height="100%">
						<SidebarNavigationItem href="/all-shows">All shows</SidebarNavigationItem>
						<SidebarNavigationItem href="/top-rated">Top rated</SidebarNavigationItem>
						<SidebarNavigationItem href="/">My profile</SidebarNavigationItem>
					</Flex>
					<SidebarNavigationItem href="/login" onClickHandler={logout}>
						Log out
					</SidebarNavigationItem>
				</Flex>
			) : (
				<></>
			)}
		</>
	);
};
