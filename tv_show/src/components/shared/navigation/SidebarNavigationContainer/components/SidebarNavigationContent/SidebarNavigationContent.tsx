import { Flex } from '@chakra-ui/react';
import { SidebarNavigationItem } from '../SidebarNavigationItem/SidebarNavigationItem';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { Picker } from '@/components/features/picker/Picker/Picker';

export const SidebarNavigationContent = () => {
	const logout = () => {
		localStorage.removeItem('authorization-header');
		mutate(swrKeys.getUser, null, { revalidate: false });
	};

	return (
		<Flex
			direction="column"
			justifyContent="space-between"
			height="100%"
			padding={{ base: '0px 0px 0px 16px', sm: '78px 0px 0px 0px' }}
		>
			<Picker />
			<Flex direction="column" gap="18px">
				<SidebarNavigationItem href="/all-shows">All shows</SidebarNavigationItem>
				<SidebarNavigationItem href="/top-rated">Top rated</SidebarNavigationItem>
				<SidebarNavigationItem href="/">My profile</SidebarNavigationItem>
			</Flex>
			<SidebarNavigationItem href="/login" onClickHandler={logout}>
				Log out
			</SidebarNavigationItem>
		</Flex>
	);
};
