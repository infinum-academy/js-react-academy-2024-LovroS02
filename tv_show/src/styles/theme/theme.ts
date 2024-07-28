import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';
import colors from './foundations/colors';
import fontSizes from './foundations/fontSizes';
import fontWeights from './foundations/fontWeights';
import Drawer from './components/drawer';
import Card from './components/card';
import radii from './foundations/radius';
import Button from './components/button';
import Modal from './components/modal';
import Progress from './components/progress';
import Input from './components/input';

const fonts = {
	body: 'Roboto, sans-serif',
	heading: 'Roboto, sans-serif',
};

const theme = extendTheme({
	components: { Drawer, Card, Button, Modal, Progress, Input },
	colors,
	fonts,
	fontSizes,
	fontWeights,
	radii,
});

export default theme;
