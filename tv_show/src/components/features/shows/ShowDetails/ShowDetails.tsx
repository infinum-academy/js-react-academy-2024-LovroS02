import { IShow } from '@/typings/show';
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
			gap={8}
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
			<Flex justifyContent="space-between" alignItems="center">
				<Flex direction="column">
					<Heading pl={8} size="lg">
						{show.title}
					</Heading>
					<Text pl={8} mb={8}>
						{rating()}
					</Text>
				</Flex>
				<Text pl={8} pr={8} width="478px">
					{show.description}
				</Text>
			</Flex>
		</Flex>
	);
};
