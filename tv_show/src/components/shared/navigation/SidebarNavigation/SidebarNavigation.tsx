'use client';

import { INavigationItem } from '@/typings/navigation';
import { Flex, Image, Text } from '@chakra-ui/react';
import { SidebarNavigationItem } from '../components/SidebarNavigationItem/SidebarNavigationItem';
import CIcon from '@coreui/icons-react';
import { cilTv } from '@coreui/icons';
import { AppLogo } from '../AppLogo/AppLogo';

export const SidebarNavigation = () => {
	return (
		<Flex direction="column" bg="darkblue" width="300px" padding={6}>
			<AppLogo />
			<Flex direction="column" gap={4} mt={8} height="100%">
				<SidebarNavigationItem href="/all-shows">All shows</SidebarNavigationItem>
				<SidebarNavigationItem href="/top-rated">Top rated</SidebarNavigationItem>
				<SidebarNavigationItem href="/">My profile</SidebarNavigationItem>
			</Flex>
			<SidebarNavigationItem href="/logout">Log out</SidebarNavigationItem>
		</Flex>
	);
};
