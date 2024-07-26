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
import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import useSWR from 'swr';
import { IShow } from '@/typings/show';
import { getRoundShows } from '@/services/getShows';
import { PickerShowStep } from './components/PickerShowStep';

interface IShowsListResponse {
	shows: Array<IShow>;
}

interface IPickerContext {
	currentStep: number;
	setCurrentStep: (newStep: number) => void;
	currentRound: number;
	setCurrentRound: (newRound: number) => void;
	roundShows: Array<IShow>;
	setRoundShows: (newShows: Array<IShow>) => void;
}

export const PickerContext = createContext<IPickerContext>({} as IPickerContext);

export const Picker = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentStep, setCurrentStep] = useState(0);
	const [currentRound, setCurrentRound] = useState(1);
	const [roundShows, setRoundShows] = useState<Array<IShow>>([]);
	const { data } = useSWR<IShowsListResponse>(swrKeys.allShows, fetcher);

	if (!data) {
		return null;
	}

	const onClickHandler = () => {
		onOpen();
		setRoundShows(getRoundShows(8, data.shows));
		setCurrentStep(0);
		setCurrentRound(1);
	};

	return (
		<>
			<PickerContext.Provider
				value={{ currentStep, setCurrentStep, currentRound, setCurrentRound, roundShows, setRoundShows }}
			>
				<Button onClick={onClickHandler} bg={{ base: 'purple.400', sm: 'purple.700' }}>
					Picker
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay>
						<ModalContent bg="purple.700" color="white">
							<ModalHeader>Picker</ModalHeader>
							<ModalBody>
								<PickerShowStep />
							</ModalBody>
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
