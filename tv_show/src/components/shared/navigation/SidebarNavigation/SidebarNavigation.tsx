'use client';

import { Flex } from '@chakra-ui/react';
import { SidebarNavigationItem } from '../components/SidebarNavigationItem/SidebarNavigationItem';
import { AppLogo } from '../AppLogo/AppLogo';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { useEffect, useState } from 'react';
import { MobileSidebarNavigation } from './MobileSidebarNavigation';

export const SidebarNavigation = () => {
	const [width, setWidth] = useState(window.outerWidth);

	useEffect(() => {
		setWidth(window.outerWidth);
	}, []);

	const logout = () => {
		localStorage.removeItem('authorization-header');
		mutate(swrKeys.getUser, null, { revalidate: false });
	};

	return (
		<>
			{width <= 430 ? (
				<MobileSidebarNavigation />
			) : (
				<Flex direction="column" bg="darkblue" width="300px" padding={6}>
					<AppLogo />
					<Flex direction="column" gap={4} mt={8} height="100%">
						<SidebarNavigationItem href="/all-shows">All shows</SidebarNavigationItem>
						<SidebarNavigationItem href="/top-rated">Top rated</SidebarNavigationItem>
						<SidebarNavigationItem href="/">My profile</SidebarNavigationItem>
					</Flex>
					<SidebarNavigationItem href="/login" onClickHandler={logout}>
						Log out
					</SidebarNavigationItem>
				</Flex>
			)}
		</>
	);
};
