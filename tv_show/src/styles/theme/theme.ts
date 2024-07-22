import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';
import colors from './foundations/colors';
import fontSizes from './foundations/fontSizes';
import fontWeights from './foundations/fontWeights';

const fonts = {
	body: 'Roboto, sans-serif',
	heading: 'Roboto, sans-serif',
};

const theme = extendTheme({
	components: {},
	colors,
	fonts,
	fontSizes,
	fontWeights,
});

export default theme;
