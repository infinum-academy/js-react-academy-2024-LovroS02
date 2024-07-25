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
	const { data } = useSWR<IShowsListResponse>(swrKeys.allShows, fetcher);

	if (!data) {
		return null;
	}

	const [roundShows, setRoundShows] = useState(getRoundShows(8, data.shows));

	return (
		<>
			<PickerContext.Provider
				value={{ currentStep, setCurrentStep, currentRound, setCurrentRound, roundShows, setRoundShows }}
			>
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
