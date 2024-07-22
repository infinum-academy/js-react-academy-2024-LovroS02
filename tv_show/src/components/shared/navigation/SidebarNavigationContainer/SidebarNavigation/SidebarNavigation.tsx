'use client';

import { Flex } from '@chakra-ui/react';
import { SidebarNavigationContent } from '../components/SidebarNavigationContent/SidebarNavigationContent';
import { AppLogo } from '../../AppLogo/AppLogo';

export const SidebarNavigation = () => {
	return (
		<Flex hideBelow="sm" direction="column" bg="darkblue" padding={6}>
			<AppLogo />
			<SidebarNavigationContent />
		</Flex>
	);
};
