'use client';

import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Flex,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react';
import { AppLogo } from '../../AppLogo/AppLogo';
import { HamburgerIcon } from '@chakra-ui/icons';
import { SidebarNavigationContent } from '../components/SidebarNavigationContent/SidebarNavigationContent';

export const MobileSidebarNavigation = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex hideFrom="sm" bg="darkblue" padding={6} justifyContent="space-between">
			<AppLogo />
			<IconButton aria-label="drawer-button" icon={<HamburgerIcon />} colorScheme="darkblue" onClick={onOpen}>
				Open
			</IconButton>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody>
						<SidebarNavigationContent />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};
