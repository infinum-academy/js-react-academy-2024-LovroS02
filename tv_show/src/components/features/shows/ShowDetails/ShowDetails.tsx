import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Image, Heading, Text, Flex } from '@chakra-ui/react';

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
		<Flex
			direction="column"
			bg="white"
			borderRadius="24px"
			overflow="hidden"
			color="purple.400"
			width="1052px"
			height="610px"
		>
			<Image
				src={show.image_url}
				alt="Show image"
				fallbackSrc="https://fakeimg.pl/600x400"
				width="100%"
				height="440px"
				objectFit="cover"
			/>
			<Flex justifyContent="space-between" alignItems="center" padding="40px 50px 50px 40px">
				<Flex direction="column">
					<Heading size="lg">{show.title}</Heading>
					<Flex alignItems="baseline">
						<StarIcon boxSize={6} />
						<Text>{rating()}</Text>
					</Flex>
				</Flex>
				<Text>{show.description}</Text>
			</Flex>
		</Flex>
	);
};
