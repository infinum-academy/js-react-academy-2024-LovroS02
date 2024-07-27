'use client';

import { useContext } from 'react';
import { PickerContext } from '../Picker';
import { Card, CardBody, CardFooter, Flex, Image } from '@chakra-ui/react';
import { createRoundShowsMatrix } from '@/services/createShowsMatrix';

export const PickerShowStep = () => {
	const { roundShows, currentRound, currentStep, selectedShows, setSelectedShows } = useContext(PickerContext);

	const duels = createRoundShowsMatrix(currentRound, roundShows);

	return (
		<Flex gap={3}>
			{duels[currentStep % Math.floor(4 / currentRound)].map((show) => {
				const isSelected = selectedShows.find((s) => s === show);
				return (
					<Card
						key={show.id}
						variant="picker"
						onClick={
							isSelected
								? () => {
										setSelectedShows(selectedShows.filter((s) => s !== show));
								  }
								: () => {
										setSelectedShows([
											...selectedShows.filter(
												(s) => s !== duels[currentStep % Math.floor(4 / currentRound)].find((s) => s !== show)
											),
											show,
										]);
								  }
						}
						borderColor={isSelected ? 'purple.200' : 'purple.700'}
						borderWidth="thick"
					>
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
