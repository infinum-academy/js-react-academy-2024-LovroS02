import { Flex, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { PickerContext } from '../Picker';

export const PickerButtons = () => {
	const { currentStep, setCurrentStep, currentRound, setCurrentRound, setRoundShows, selectedShows, setSelectedShows } =
		useContext(PickerContext);

	return (
		<Flex width="100%" justifyContent="space-between">
			<Button hidden={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>
				Previous
			</Button>
			<Button
				hidden={currentStep === 7}
				onClick={
					selectedShows.length === 1 && currentRound === 3
						? () => {
								setCurrentStep(currentStep + 1);
								setRoundShows([]);
								setCurrentRound(currentRound + 1);
						  }
						: currentStep % Math.floor(4 / currentRound) === Math.floor(4 / currentRound) - 1
						? () => {
								setCurrentStep(currentStep + 1);
								setCurrentRound(currentRound + 1);
								setRoundShows(selectedShows);
								setSelectedShows([]);
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
