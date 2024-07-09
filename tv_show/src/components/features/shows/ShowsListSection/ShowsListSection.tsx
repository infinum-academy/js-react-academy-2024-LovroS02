"use client";

import { ShowsList } from '@/components/shared/shows/ShowsList/ShowsList';
import { IShow } from '@/typings/show';
import { Container } from '@chakra-ui/react';

const shows: Array<IShow> = [
	{ title: 'Bok', description: 'Bok', imageUrl: '', averageRating: 2 },
	{ title: 'Pozdrav', description: 'Pozdrav', imageUrl: '', averageRating: 4 },
];

export const ShowsListSection = () => {
	return (
		<Container>
			<ShowsList shows={shows} />
		</Container>
	);
};
