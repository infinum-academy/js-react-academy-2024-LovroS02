'use client';

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
		<Flex direction="column" bg="darkblue" width="300px" padding={6}>
			<Flex fontStyle="italic" color="white" alignItems="center">
				<CIcon icon={cilTv} size="sm" height={30} />
				<Text ml={2} fontFamily="cursive" fontSize="20px">
					TV SHOW APP
				</Text>
			</Flex>
			<Flex direction="column" gap={4} mt={8} height="100%">
				<SidebarNavigationItem navigationItem={sidebarNavigationItems[0]} />
				<SidebarNavigationItem navigationItem={sidebarNavigationItems[1]} />
				<SidebarNavigationItem navigationItem={sidebarNavigationItems[2]} />
			</Flex>
			<SidebarNavigationItem navigationItem={sidebarNavigationItems[3]} />
		</Flex>
	);
};
