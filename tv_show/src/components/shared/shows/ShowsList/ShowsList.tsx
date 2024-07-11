"use client";

import { Flex, SimpleGrid } from '@chakra-ui/react';
import { ShowCard } from '../ShowCard/ShowCard';
import { IShow } from '@/typings/show';

interface IShowsListProps {
	shows: Array<IShow>;
}

export const ShowsList = ({ shows }: IShowsListProps) => {
	return (
		<SimpleGrid columns={4} display="flex" flexWrap="wrap" padding={6} gap={6}>
			{shows.map((show) => (
				<ShowCard key={show.id} show={show} />
			))}
		</SimpleGrid>
	);
};
