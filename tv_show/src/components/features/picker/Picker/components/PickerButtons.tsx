import { Flex, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { PickerContext } from '../Picker';

export const PickerButtons = () => {
	const { currentStep, setCurrentStep } = useContext(PickerContext);

	return (
		<Flex width="100%" justifyContent="space-between" >
			<Button hidden={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>
				Previous
			</Button>
			<Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
		</Flex>
	);
};
