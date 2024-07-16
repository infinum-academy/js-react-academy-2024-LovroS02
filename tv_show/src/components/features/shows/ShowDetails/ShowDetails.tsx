import { IShow } from '@/typings/show';
import { Container, Image, Heading, Text, Flex } from '@chakra-ui/react';

interface ShowDetailsProps {
	show: IShow;
}

export const ShowDetails = ({ show }: ShowDetailsProps) => {
	const rating = () => {
		if (show.average_rating !== undefined && show.average_rating !== 0 && show.average_rating !== null) {
			return show.average_rating + '/5';
		}
		return 'no ratings';
	};

	return (
		<Flex direction="column" gap={8} bg="white" borderRadius="20px" overflow="hidden" color="darkblue">
			<Image src={show.image_url} alt="Show image" fallbackSrc="https://fakeimg.pl/600x400" />
			<Heading pl={8} size="lg">
				{show.title}
			</Heading>
			<Text pl={8} pr={8}>
				{show.description}
			</Text>
			<Text pl={8} mb={8}>
				{rating()}
			</Text>
		</Flex>
	);
};
