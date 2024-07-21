"use client";

import { Flex, SimpleGrid } from '@chakra-ui/react';
import { ShowCard } from '../ShowCard/ShowCard';
import { IShow } from '@/typings/show';

interface IShowsListProps {
	shows: Array<IShow>;
}

export const MobileShowsList = ({ shows }: IShowsListProps) => {
	return (
		<Flex direction="column" bg="darkblue" display="flex" flexWrap="wrap" padding={6} gap={6} justifyContent="center">
			{shows.map((show) => (
				<ShowCard key={show.id} show={show} />
			))}
		</Flex>
	);
};
