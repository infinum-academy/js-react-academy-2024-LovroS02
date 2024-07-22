import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers(['container', 'body', 'footer']);

const defaultProps = {
	size: 'md',
};

const Card = helpers.defineMultiStyleConfig({
	defaultProps,
	baseStyle: {
		container: {
			width: '240px',
			height: '374px',
			bg: 'white',
			borderRadius: '24px',
			overflow: 'hidden',
			cursor: 'pointer',
		},
		body: {
			width: '240px',
			height: '300px',
			padding: '0px',
		},
		footer: {
			flexDirection: 'column',
			padding: '18px 0px 13px 18px',
			color: 'purple.400',
		},
	},

	variants: {
		mobile: {
			container: {
				width: '342px',
				height: '480px',
				bg: 'white',
				borderRadius: '16px',
				overflow: 'hidden',
				cursor: 'pointer',
			},
			body: {
				width: '342px',
				height: '428px',
				padding: '0px',
			},
			footer: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				padding: '16px 0px 16px 21px',
				color: 'purple.400',
			},
		},
	},
});

export default Card;
