import { INavigationItem } from '@/typings/navigation';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

interface ISidebarNavigationItemProps {
	navigationItem: INavigationItem;
}

export const SidebarNavigationItem = ({ navigationItem }: ISidebarNavigationItemProps) => {
	return (
		<Button
			as={NextLink}
			href={`/${navigationItem.route}`}
			bg="darkblue"
			color="white"
			maxW="100px"
			borderRadius="20px"
			height="30px"
		>
			{navigationItem.title}
		</Button>
	);
};
