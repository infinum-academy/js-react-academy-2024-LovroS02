'use client';

import { INavigationItem } from '@/typings/navigation';
import { Flex, Image, Text } from '@chakra-ui/react';
import { SidebarNavigationItem } from '../components/SidebarNavigationItem/SidebarNavigationItem';
import CIcon from '@coreui/icons-react';
import { cilTv } from '@coreui/icons';

export const SidebarNavigation = () => {
	return (
		<Flex direction="column" bg="darkblue" width="300px" padding={6}>
			<Flex fontStyle="italic" color="white" alignItems="center">
				<CIcon icon={cilTv} size="sm" height={30} />
				<Text ml={2} fontFamily="cursive" fontSize="20px">
					TV SHOW APP
				</Text>
			</Flex>
			<Flex direction="column" gap={4} mt={8} height="100%">
				<SidebarNavigationItem href="/all-shows">All shows</SidebarNavigationItem>
				<SidebarNavigationItem href="/top-rated">Top rated</SidebarNavigationItem>
				<SidebarNavigationItem href="/">My profile</SidebarNavigationItem>
			</Flex>
			<SidebarNavigationItem href="/">Log out</SidebarNavigationItem>
		</Flex>
	);
};
