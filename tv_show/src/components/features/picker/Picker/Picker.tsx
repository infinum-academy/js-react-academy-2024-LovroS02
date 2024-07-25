'use client';

import {
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { PickerProgress } from './components/PickerProgress';
import { createContext, useState } from 'react';

interface IPickerContext {
	currentStep: number;
}

export const PickerContext = createContext<IPickerContext>({} as IPickerContext);

export const Picker = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentStep, setCurrentStep] = useState(0);

	return (
		<>
			<PickerContext.Provider value={{ currentStep }}>
				<Button onClick={onOpen} bg={{ base: 'purple.400', sm: 'purple.700' }}>
					Picker
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay>
						<ModalContent>
							<ModalHeader>Picker</ModalHeader>
							<ModalBody></ModalBody>
							<ModalFooter>
								<Flex direction="column" width="100%" gap={3}>
									<PickerProgress />
									<Flex width="100%" justifyContent="space-between">
										<Button hidden={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>
											Previous
										</Button>
										<Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
									</Flex>
								</Flex>
							</ModalFooter>
						</ModalContent>
					</ModalOverlay>
				</Modal>
			</PickerContext.Provider>
		</>
	);
};
