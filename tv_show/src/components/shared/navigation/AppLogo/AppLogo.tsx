import { Flex, Text } from '@chakra-ui/react';
import { cilTv } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

export const AppLogo = () => {
	return (
		<Flex fontStyle="italic" color="white" alignItems="center">
			<CIcon icon={cilTv} size="sm" height={30} />
			<Text ml={2} fontFamily="cursive" fontSize="20px">
				TV SHOW APP
			</Text>
		</Flex>
	);
};
