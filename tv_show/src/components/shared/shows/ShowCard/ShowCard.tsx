'use client';

import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Heading, Text, Image, Card, CardBody, Flex } from '@chakra-ui/react';

interface IShowCardProps {
	show: IShow;
}

export const ShowCard = ({ show }: IShowCardProps) => {
	return (
		<Card
			maxW="2xs"
			borderRadius="20px"
			onClick={() => {
				console.log('Bok');
			}}
			cursor="pointer"
		>
			<Image
				src={show.imageUrl}
				fallbackSrc="https://fakeimg.pl/600x400"
				alt={show.title + ' image'}
				borderTopRadius="20px"
			/>
			<Heading size="md" fontFamily="bold" padding="15px 0px 0px 15px" color="darkblue">
				{show.title}
			</Heading>
			<Flex alignItems="center" direction="row" mb={4} padding="5px 0px 0px 15px">
				<StarIcon boxSize={3} color="darkblue" />
				<Text fontSize="sm" pl={1}>
					{show.averageRating + '/5'}
				</Text>
			</Flex>
		</Card>
	);
};
