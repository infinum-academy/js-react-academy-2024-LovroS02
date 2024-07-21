import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';

const colors = {
	white: '#ffffff',
	lightPurple: '#8D5CE5',
	purple_2: '#371687',
	darkPurple: '#1B004C',
	error: '#FF2498',
	black: '#000000',
};

const fonts = {
	body: 'Roboto, sans-serif',
	heading: 'Roboto, sans-serif',
};

const fontSizes = {
	headline: {
		web: '40px',
		mobile: '24px',
	},
	title: '24px',
	body: { web: '20px', mobile: '14px' },
	subtitle: '18px',
	smallCaption: { web: '16px', mobile: '14px' },
	buttonOrCaption: '14px',
	note: '12px',
};

const fontWeights = {
	regular: 400,
	bold: 700,
	lightBold: 500,
};

const theme = extendTheme({
	components: {},
	colors,
	fonts,
	fontSizes,
	fontWeights,
});

export default theme;
