'use client';

import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Heading, Text, Image, Card, CardBody, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

interface IShowCardProps {
	show: IShow;
}

export const ShowCard = ({ show }: IShowCardProps) => {
	const checkAverageRating = (rating?: number) => {
		if (rating !== undefined && rating !== 0) {
			return rating + ' / 5';
		}
		return 'no rating';
	};

	return (
		<Card as={NextLink} href={`/all-shows/${show.id}`} maxW="2xs" borderRadius="20px" cursor="pointer">
			<Image
				src={show.image_url}
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
					{checkAverageRating(show.average_rating)}
				</Text>
			</Flex>
		</Card>
	);
};
