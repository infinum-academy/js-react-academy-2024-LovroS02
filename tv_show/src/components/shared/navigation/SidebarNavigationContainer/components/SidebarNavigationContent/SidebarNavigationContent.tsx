import { Flex } from '@chakra-ui/react';
import { AppLogo } from '../../../AppLogo/AppLogo';
import { SidebarNavigationItem } from '../SidebarNavigationItem/SidebarNavigationItem';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';

export const SidebarNavigationContent = () => {
	const logout = () => {
		localStorage.removeItem('authorization-header');
		mutate(swrKeys.getUser, null, { revalidate: false });
	};

	return (
		<Flex direction="column" justifyContent="space-between" height="100%">
			<Flex direction="column" gap={4}>
				<SidebarNavigationItem href="/all-shows">All shows</SidebarNavigationItem>
				<SidebarNavigationItem href="/top-rated">Top rated</SidebarNavigationItem>
				<SidebarNavigationItem href="/">My profile</SidebarNavigationItem>
			</Flex>
			<SidebarNavigationItem href="/login" onClickHandler={logout}>
				Log out
			</SidebarNavigationItem>
		</Flex>
	);
};
