'use client';

import { ShowsList } from '@/components/shared/shows/ShowsList/ShowsList';
import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { IShow } from '@/typings/show';
import { WarningIcon } from '@chakra-ui/icons';
import { Flex, Spinner } from '@chakra-ui/react';
import useSWR from 'swr';

interface IShowsListResponse {
	shows: Array<IShow>;
}

export const ShowsListSection = () => {
	const { data, isLoading, error } = useSWR<IShowsListResponse>(swrKeys.allShows, fetcher);

	if (error) {
		return <WarningIcon color="white" boxSize={100} mx="50%" />;
	}

	if (isLoading) {
		return <Spinner thickness="8px" emptyColor="darkblue" color="white" boxSize={100} mx="50%" />;
	}

	return (
		<Flex overflowY="auto" height="100vh" bg="darkblue" width="100%" justifyContent="center">
			{data && <ShowsList shows={data.shows} />}
		</Flex>
	);
};
