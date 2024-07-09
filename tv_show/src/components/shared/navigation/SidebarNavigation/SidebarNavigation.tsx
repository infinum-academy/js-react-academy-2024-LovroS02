import { INavigationItem } from '@/typings/navigation';
import { Flex } from '@chakra-ui/react';

const sidebarNavigationItems: Array<INavigationItem> = [
	{ title: 'All shows', route: 'all-shows' },
	{ title: 'Top rated', route: 'top-rated' },
	{ title: 'My profile', route: '' },
	{ title: 'Log out', route: '' },
];

export const SidebarNavigation = () => {
	return <Flex direction="column" bg="darkblue"></Flex>;
};
