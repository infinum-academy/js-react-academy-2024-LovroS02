'use client';

import { ShowsList } from '@/components/shared/shows/ShowsList/ShowsList';
import { IShow } from '@/typings/show';
import { Flex } from '@chakra-ui/react';

const shows: Array<IShow> = [
	{ title: 'Bok', description: 'Bok', imageUrl: '', averageRating: 2 },
	{ title: 'Pozdrav', description: 'Pozdrav', imageUrl: '', averageRating: 4 },
];

export const ShowsListSection = () => {
	return (
		<Flex bg="darkblue" maxW="80%" ml="20%">
			<ShowsList shows={shows} />
		</Flex>
	);
};
