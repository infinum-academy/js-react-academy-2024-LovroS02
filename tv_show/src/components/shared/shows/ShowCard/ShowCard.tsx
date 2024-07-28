'use client';

import { IShow } from '@/typings/show';
import { StarIcon } from '@chakra-ui/icons';
import { Heading, Text, Image, Card, Flex, Box, Container, CardBody, CardFooter } from '@chakra-ui/react';
import NextLink from 'next/link';

interface IShowCardProps {
	show: IShow;
}

export const ShowCard = ({ show }: IShowCardProps) => {
	const checkAverageRating = (rating?: number) => {
		if (rating !== undefined && rating !== 0 && rating !== null) {
			return rating + '/5';
		}
		return 'no rating';
	};

	return (
		<Card as={NextLink} href={`/all-shows/${show.id}`} variant={{ base: 'mobile', sm: 'baseStyle' }}>
			<CardBody>
				<Image
					src={show.image_url}
					fallbackSrc="https://fakeimg.pl/600x400"
					alt={show.title + ' image'}
					width="100%"
					height="100%"
					objectFit="cover"
				/>
			</CardBody>
			<CardFooter>
				<Heading height={{ base: '20px', sm: '16px' }} fontSize="lg" fontWeight="bold" color="darkblue">
					{show.title}
				</Heading>
				<Flex pt={{ base: '0px', sm: '8px' }} pr={{ base: '20px', sm: '0px' }}>
					<StarIcon boxSize={{ base: '24px', sm: '16px' }} />
					<Text fontSize="sm" pl={{ base: '5px', sm: '4px' }} height={{ base: '15px', sm: '20px' }}>
						{checkAverageRating(show.average_rating)}
					</Text>
				</Flex>
			</CardFooter>
		</Card>
	);
};
