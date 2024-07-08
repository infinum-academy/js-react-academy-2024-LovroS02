import { StarIcon } from '@chakra-ui/icons';
import { color, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

interface CustomRatingInputProps {
	label: string;
	value: number;
	onChange: (index: number) => void;
}

export const CustomRatingInput = ({ label, value, onChange }: CustomRatingInputProps) => {
	const [hoveredIndex, setHoveredIndex] = useState(0);

	const onHover = (index: number) => {
		setHoveredIndex(index);
	};

	const setColor = (index: number) => {
		if (hoveredIndex) {
			if (index <= hoveredIndex) {
				return 'gold';
			}
			return 'gray.300';
		}
		if (index <= value) {
			return 'gold';
		}
		return 'gray.300';
	};

	return (
		<Flex direction="row" alignItems="center">
			<Input color="white" value={label} variant="unstyled" size="lg" maxW="15%" />
			<Flex direction="row" gap={1} onMouseLeave={() => setHoveredIndex(0)}>
				{Array.from(Array(5)).map((_, index) => {
					return (
						<StarIcon
							key={index}
							boxSize={6}
							color={setColor(index + 1)}
							onMouseOver={() => onHover(index + 1)}
							cursor={label === 'Rating' ? 'pointer' : 'default'}
							onClick={() => onChange(index + 1)}
						/>
					);
				})}
			</Flex>
		</Flex>
	);
};
