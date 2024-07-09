import { SimpleGrid } from '@chakra-ui/react';
import { ShowCard } from '../ShowCard/ShowCard';
import { IShow } from '@/typings/show';

interface IShowListProps {
	shows: Array<IShow>;
}

export const ShowList = ({ shows }: IShowListProps) => {
	return (
		<SimpleGrid>
			{shows.map((show) => (
				<ShowCard key={show.title} show={show}></ShowCard>
			))}
		</SimpleGrid>
	);
};
