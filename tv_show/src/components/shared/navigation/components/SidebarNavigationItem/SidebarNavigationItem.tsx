import { INavigationItem } from '@/typings/navigation';
import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface ISidebarNavigationItemProps {
	href: string;
	children: React.ReactNode;
	onClickHandler?: () => void;
}

export const SidebarNavigationItem = ({ href, children, onClickHandler }: ISidebarNavigationItemProps) => {
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
			onClick={onClickHandler}
		>
			{children}
		</Button>
	);
};
