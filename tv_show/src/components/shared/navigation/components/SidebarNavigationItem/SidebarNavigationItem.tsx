import { INavigationItem } from '@/typings/navigation';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

interface SidebarNavigationItemProps {
	href: string;
	children: React.ReactNode;
}

export const SidebarNavigationItem = ({href, children}: SidebarNavigationItemProps) => {
	return (
		<Button as={NextLink} href={href} bg="darkblue" color="white" maxW="100px" borderRadius="20px" height="30px">
			{children}
		</Button>
	);
};
