import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers(['dialog', 'closeButton', 'header', 'body', 'footer']);

const defaultProps = {
	size: 'lg',
};

const Modal = helpers.defineMultiStyleConfig({
	defaultProps,
	baseStyle: {
		dialog: {
			borderRadius: 'modalRadius',
			padding: '24px',
			bg: 'purple.700',
			color: 'white',
		},
		closeButton: {
			top: '24px',
			right: '24px',
			color: 'white',
			width: '24px',
			height: '24px',
			_hover: {
				bg: 'inherit',
			},
		},
		header: {
			padding: '0px',
			fontSize: 'xl',
			fontWeight: 'bold',
		},
		body: {
			display: 'flex',
			padding: '10px 0px 16px 0px',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'row',
		},
		footer: {
			padding: '0px',
		},
	},
});

export default Modal;
