import { Flex, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { PickerContext } from '../Picker';

export const PickerButtons = () => {
	const {
		currentStep,
		setCurrentStep,
		currentRound,
		setCurrentRound,
		roundShows,
		setRoundShows,
		selectedShows,
		setSelectedShows,
		unselectedShows,
		setUnselectedShows,
	} = useContext(PickerContext);

	console.log(currentStep, currentRound, unselectedShows, selectedShows, roundShows);

	return (
		<Flex width="100%" justifyContent="space-between">
			<Button
				variant={{ base: 'mobileModal', md: 'modal' }}
				hidden={currentStep === 0}
				onClick={
					currentStep % Math.floor(4 / currentRound) === 0
						? () => {
								setCurrentStep(currentStep - 1);
								setCurrentRound(currentRound - 1);
								setRoundShows(unselectedShows[currentRound - 2]);
						  }
						: () => setCurrentStep(currentStep - 1)
				}
			>
				{currentStep % Math.floor(4 / currentRound) === 0 ? 'Previous Round' : 'Previous'}
			</Button>
			<Button
				variant={{ base: 'mobileModal', md: 'modal' }}
				hidden={currentStep === 7}
				onClick={
					(selectedShows.length === 1 && currentRound === 3) ||
					currentStep % Math.floor(4 / currentRound) === Math.floor(4 / currentRound) - 1
						? () => {
								setCurrentStep(currentStep + 1);
								setCurrentRound(currentRound + 1);
								const copyUnselectedShows = [...unselectedShows];
								copyUnselectedShows[currentRound - 1] = roundShows;
								setUnselectedShows(copyUnselectedShows);
								setRoundShows(selectedShows[currentRound - 1]);
								const copySelectedShows = [...selectedShows];
								copySelectedShows[currentRound] = [];
								setSelectedShows(copySelectedShows);
						  }
						: () => setCurrentStep(currentStep + 1)
				}
			>
				{selectedShows.length === 1 && currentRound === 3
					? 'Result'
					: currentStep % Math.floor(4 / currentRound) === Math.floor(4 / currentRound) - 1
					? 'Next Round'
					: 'Next'}
			</Button>
		</Flex>
	);
};
