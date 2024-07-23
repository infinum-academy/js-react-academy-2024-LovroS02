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
		<Flex hideFrom="sm" bg="purple.700" padding="36px 8px 0px 16px" justifyContent="space-between">
			<AppLogo />
			<IconButton aria-label="drawer-button" icon={<HamburgerIcon />} variant="hamburger" onClick={onOpen} />
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody padding="84px 0px 56px 0px">
						<SidebarNavigationContent />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};
