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
		<Container padding={0} maxW="100%" bg="white" color="darkblue" borderRadius="20px">
			<Flex direction="column" gap={8}>
				<Image src={show.image_url} alt="Show image" fallbackSrc="https://fakeimg.pl/600x400" borderTopRadius="20px" />
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
		</Container>
	);
};
