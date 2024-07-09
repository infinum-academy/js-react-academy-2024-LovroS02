import { INavigationItem } from '@/typings/navigation';
import { Flex, Image, Text } from '@chakra-ui/react';
import { SidebarNavigationItem } from '../components/SidebarNavigationItem/SidebarNavigationItem';

const sidebarNavigationItems: Array<INavigationItem> = [
	{ title: 'All shows', route: 'all-shows' },
	{ title: 'Top rated', route: 'top-rated' },
	{ title: 'My profile', route: '' },
	{ title: 'Log out', route: '' },
];

export const SidebarNavigation = () => {
	return (
		<Flex direction="column" bg="darkblue">
            <Flex direction="row" fontStyle="italic" color="white">
                <Image src="TV_icon.jpeg" alt='TV icon' />
                <Text>TV SHOW APP</Text>
            </Flex>
			{sidebarNavigationItems.map((navigationItem) => (
				<SidebarNavigationItem key={navigationItem.title} navigationItem={navigationItem} />
			))}
		</Flex>
	);
};
