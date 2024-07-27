'use client';

import {
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
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
import { PickerShowResult } from './components/PickerShowResult';
import { PickerStepper } from './components/PickerStepper';

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
	selectedShows: Array<Array<IShow>>;
	setSelectedShows: (newSelectedShows: Array<Array<IShow>>) => void;
	unselectedShows: Array<Array<IShow>>;
	setUnselectedShows: (newSelectedShows: Array<Array<IShow>>) => void;
}

export const PickerContext = createContext<IPickerContext>({} as IPickerContext);

export const Picker = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentStep, setCurrentStep] = useState(0);
	const [currentRound, setCurrentRound] = useState(1);
	const [roundShows, setRoundShows] = useState<Array<IShow>>([]);
	const [selectedShows, setSelectedShows] = useState<Array<Array<IShow>>>([[]]);
	const [unselectedShows, setUnselectedShows] = useState<Array<Array<IShow>>>([[]]);
	const { data } = useSWR<IShowsListResponse>(swrKeys.allShows, fetcher);

	if (!data) {
		return null;
	}

	const onClickHandler = () => {
		onOpen();
		setRoundShows(getRoundShows(8, data.shows));
		setCurrentStep(0);
		setCurrentRound(1);
		setSelectedShows([[]]);
		setUnselectedShows([[]]);
	};

	return (
		<>
			<PickerContext.Provider
				value={{
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
				}}
			>
				<Button onClick={onClickHandler} bg={{ base: 'purple.400', sm: 'purple.700' }}>
					Picker
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay>
						<ModalContent>
							<ModalHeader>
								{currentRound < 4 ? `Picker: Round ${currentRound}` : 'Show that you have picked'}
							</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<PickerStepper />
							</ModalBody>
							<ModalFooter>
								<Flex direction="column" width="100%" gap="16px">
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
