"use client";

import { INavigationItem } from '@/typings/navigation';
import { Flex, Image, Text } from '@chakra-ui/react';
import { SidebarNavigationItem } from '../components/SidebarNavigationItem/SidebarNavigationItem';
import CIcon from '@coreui/icons-react';
import { cilTv } from '@coreui/icons';

const sidebarNavigationItems: Array<INavigationItem> = [
	{ title: 'All shows', route: 'all-shows' },
	{ title: 'Top rated', route: 'top-rated' },
	{ title: 'My profile', route: '' },
	{ title: 'Log out', route: '' },
];

export const SidebarNavigation = () => {
	return (
		<Flex direction="column" bg="darkblue" maxW="20%" mr="80%">
			<Flex direction="row" fontStyle="italic" color="white" alignItems="center">
                <CIcon icon={cilTv} size='sm'></CIcon>
				<Text>TV SHOW APP</Text>
			</Flex>
			{sidebarNavigationItems.map((navigationItem) => (
				<SidebarNavigationItem key={navigationItem.title} navigationItem={navigationItem} />
			))}
		</Flex>
	);
};
