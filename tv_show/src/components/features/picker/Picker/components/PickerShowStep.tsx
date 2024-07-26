'use client';

import { useContext } from 'react';
import { PickerContext } from '../Picker';
import { Card, CardBody, CardFooter, Flex, Image } from '@chakra-ui/react';
import { createRoundShowsMatrix } from '@/services/createShowsMatrix';

export const PickerShowStep = () => {
	const { roundShows, currentRound, currentStep } = useContext(PickerContext);

	return (
		<Flex gap={3}>
			{createRoundShowsMatrix(currentRound, roundShows)[currentStep % (4 / currentRound)].map((show) => {
				return (
					<Card variant="picker">
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
						<CardFooter>{show.title}</CardFooter>
					</Card>
				);
			})}
		</Flex>
	);
};
