import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ISidebarNavigationItemProps {
	title: string;
	route: string;
}

export const SidebarNavigationItem = ({ title, route }: ISidebarNavigationItemProps) => {
	return (
		<Button as={NextLink} href={`/${route}`} bg="darkblue" _hover={{ color: 'blue' }}>
			{title}
		</Button>
	);
};
