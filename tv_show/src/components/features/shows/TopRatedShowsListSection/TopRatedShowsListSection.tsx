'use client';

import { ShowsList } from '@/components/shared/shows/ShowsList/ShowsList';
import { getTopRatedShowsList } from '@/fetchers/show';
import { IShow } from '@/typings/show';
import { WarningIcon } from '@chakra-ui/icons';
import { Flex, Spinner } from '@chakra-ui/react';
import useSWR from 'swr';

export const TopRatedShowsListSection = () => {
	const { data, isLoading, error } = useSWR('/shows/top-rated', getTopRatedShowsList);

	if (error) {
		return <WarningIcon color="white" boxSize={100} mx="50%" />;
	}

	if (isLoading) {
		return <Spinner thickness="8px" emptyColor="darkblue" color="white" boxSize={100} mx="50%"></Spinner>;
	}

	const shows = data?.shows || [];

	return (
		<Flex bg="darkblue" width="100%" justifyContent="center">
			<ShowsList shows={shows} />
		</Flex>
	);
};
