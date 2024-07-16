import { INavigationItem } from '@/typings/navigation';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarNavigationItemProps {
	href: string;
	children: React.ReactNode;
}

export const SidebarNavigationItem = ({ href, children }: SidebarNavigationItemProps) => {
	const path = usePathname();

	return (
		<Button
			as={NextLink}
			href={href}
			bg={path === href ? 'blue' : 'darkblue'}
			color="white"
			maxW="100px"
			borderRadius="20px"
			height="30px"
			_hover={{ bg: 'blue' }}
		>
			{children}
		</Button>
	);
};
