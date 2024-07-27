import { useContext } from 'react';
import { PickerContext } from '../Picker';
import { Card, CardBody, CardFooter, Image } from '@chakra-ui/react';

export const PickerShowResult = () => {
	const { selectedShows, currentRound } = useContext(PickerContext);

	return (
		<>
			<Card variant="picker" mx="25%">
				<CardBody>
					<Image
						src={selectedShows[0].image_url}
						fallbackSrc="https://fakeimg.pl/600x400"
						alt={selectedShows[0].title + ' image'}
						width="100%"
						height="100%"
						objectFit="cover"
					/>
				</CardBody>
				<CardFooter>{selectedShows[0].title}</CardFooter>
			</Card>
		</>
	);
};
