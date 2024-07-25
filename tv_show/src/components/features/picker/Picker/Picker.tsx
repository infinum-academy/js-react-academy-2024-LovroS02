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
import { PickerButtons } from './components/PickerButtons';

interface IPickerContext {
	currentStep: number;
	setCurrentStep: (newStep: number) => void;
}

export const PickerContext = createContext<IPickerContext>({} as IPickerContext);

export const Picker = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentStep, setCurrentStep] = useState(0);

	return (
		<>
			<PickerContext.Provider value={{ currentStep, setCurrentStep }}>
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
									<PickerButtons />
								</Flex>
							</ModalFooter>
						</ModalContent>
					</ModalOverlay>
				</Modal>
			</PickerContext.Provider>
		</>
	);
};
