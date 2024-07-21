'use client';

import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	IconButton,
	Input,
	useDisclosure,
} from '@chakra-ui/react';
import { SidebarNavigationItem } from '../components/SidebarNavigationItem/SidebarNavigationItem';
import { AppLogo } from '../AppLogo/AppLogo';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { HamburgerIcon } from '@chakra-ui/icons';

export const MobileSidebarNavigation = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const logout = () => {
		localStorage.removeItem('authorization-header');
		mutate(swrKeys.getUser, null, { revalidate: false });
	};

	return (
		<Flex bg="darkblue" padding={6} justifyContent="space-between">
			<AppLogo />
			<IconButton aria-label="drawer-button" icon={<HamburgerIcon />} colorScheme="teal" onClick={onOpen}>
				Open
			</IconButton>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />

					<DrawerBody>
						<Flex direction="column" gap={4} mt={8} height="100%">
							<SidebarNavigationItem href="/all-shows">All shows</SidebarNavigationItem>
							<SidebarNavigationItem href="/top-rated">Top rated</SidebarNavigationItem>
							<SidebarNavigationItem href="/">My profile</SidebarNavigationItem>
						</Flex>
					</DrawerBody>

					<DrawerFooter placeContent="flex-start">
						<SidebarNavigationItem href="/login" onClickHandler={logout}>
							Log out
						</SidebarNavigationItem>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};
