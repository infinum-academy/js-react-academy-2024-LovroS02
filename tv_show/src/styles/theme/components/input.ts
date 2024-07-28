import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers(['field']);

const defaultProps = {
	size: 'md',
};

const Input = helpers.defineMultiStyleConfig({
	defaultProps,
	baseStyle: {
		field: {
			fontFamily: 'Roboto',
			color: 'white',
			fontSize: 'sm',
			fontWeight: 'regular',
			borderRadius: 'inputRadius',
			bg: 'purple.400',
			height: '56px',
		},
	},

	variants: {
		auth: {
			field: {
				borderColor: 'white',
				border: '2px solid',

				_invalid: {
					borderColor: 'error',
					boxShadow: '0 0 0 2px error',
				},
				_focusVisible: {
					borderColor: 'white',
				},
				_hover: {
					borderColor: 'white',
				},
				_placeholder: {
					color: 'white',
				},
			},
		},
	},
});

export default Input;
