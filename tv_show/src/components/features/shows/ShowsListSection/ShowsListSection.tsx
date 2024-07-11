'use client';

import { ShowsList } from '@/components/shared/shows/ShowsList/ShowsList';
import { getShowsList } from '@/fetchers/show';
import { IShow } from '@/typings/show';
import { WarningIcon } from '@chakra-ui/icons';
import { Flex, Spinner } from '@chakra-ui/react';
import useSWR from 'swr';

export const ShowsListSection = () => {
	const { data, isLoading, error } = useSWR('/shows', getShowsList);

	if (error) {
		return <WarningIcon color="white" boxSize={100} mx="50%" />;
	}

	if (isLoading) {
		return <Spinner thickness="8px" emptyColor="darkblue" color="white" boxSize={100} mx="50%"></Spinner>;
	}

	const shows = data?.shows || [];

	return (
		<Flex overflowY="auto" height="100vh" bg="darkblue" width="100%" justifyContent="center">
			<ShowsList shows={shows} />
		</Flex>
	);
};
