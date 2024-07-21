'use client';

import { MobileShowsList } from '@/components/shared/shows/ShowsList/MobileShowsList';
import { ShowsList } from '@/components/shared/shows/ShowsList/ShowsList';
import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { IShow } from '@/typings/show';
import { WarningIcon } from '@chakra-ui/icons';
import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface IShowsListResponse {
	shows: Array<IShow>;
}

export const ShowsListSection = () => {
	const { data, isLoading, error } = useSWR<IShowsListResponse>(swrKeys.allShows, fetcher);

	const [width, setWidth] = useState(window.outerWidth);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, [width]);

	if (error) {
		return <WarningIcon color="white" boxSize={100} mx="50%" />;
	}

	if (isLoading) {
		return <Spinner thickness="8px" emptyColor="darkblue" color="white" boxSize={100} mx="50%" />;
	}

	return (
		<>
			{width <= 430 ? (
				<>{data && <MobileShowsList shows={data.shows} />}</>
			) : (
				<Flex overflowY="auto" height="100vh" bg="darkblue" width="100%" justifyContent="center">
					{data && <ShowsList shows={data.shows} />}
				</Flex>
			)}
		</>
	);
};
