'use client';

import { ShowsList } from '@/components/shared/shows/ShowsList/ShowsList';
import { getShowsList } from '@/fetchers/show';
import { IShow } from '@/typings/show';
import { Flex, Spinner } from '@chakra-ui/react';
import useSWR from 'swr';

export const ShowsListSection = () => {
	const { data, isLoading, error } = useSWR('/shows', getShowsList);

	if (error) {
		return <div>Ups....something went wrong</div>;
	}

	if (isLoading) {
		return <Spinner thickness="8px" emptyColor="white" color="darkblue" boxSize={100} mx="50%"></Spinner>;
	}

	const shows = data?.shows || [];

	return (
		<Flex bg="darkblue" maxW="80%" ml="20%">
			<ShowsList shows={shows} />
		</Flex>
	);
};
