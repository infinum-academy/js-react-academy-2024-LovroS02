import { StarIcon } from '@chakra-ui/icons';
import { Flex, Input, useStatStyles } from '@chakra-ui/react';
import { useState } from 'react';

interface CustomRatingInputProps {
	label: string;
	value: number;
	onChange: (index: number) => void;
}

export const CustomRatingInput = ({ label, value = 0, onChange }: CustomRatingInputProps) => {
	return (
		<Flex direction="row" gap={1}>
			<Input color="white" value={label} variant="unstyled" size="md" />
			{Array.from(Array(5)).map((_, index) => {
				return (
					<StarIcon
						key={index}
						boxSize={6}
						color={index + 1 <= value ? 'gold' : 'gray.300'}
						onClick={() => onChange(index + 1)}
					/>
				);
			})}
		</Flex>
	);
};
