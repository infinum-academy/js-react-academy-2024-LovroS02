'use client';

import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';

export const Picker = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} bg={{ base: 'purple.400', sm: 'purple.700' }}>
				Picker
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay>
					<ModalContent>
						<ModalHeader></ModalHeader>
						<ModalBody></ModalBody>
						<ModalFooter></ModalFooter>
					</ModalContent>
				</ModalOverlay>
			</Modal>
		</>
	);
};
