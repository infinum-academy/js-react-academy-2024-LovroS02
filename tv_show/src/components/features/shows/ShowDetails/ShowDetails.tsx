import { Container, Image, Heading, Text, Flex, Input } from "@chakra-ui/react";

interface ShowDetailsProps {
  avgRating: Number;
}

export const ShowDetails = ({ avgRating }: ShowDetailsProps) => {
  return (
    <Container padding={0} maxW="60%" bg="white" color="darkblue" borderRadius="20px">
      <Flex direction="column" gap={8}>
        <Image
          objectFit="contain"
          src="Brooklyn_nine_nine.png"
          fallbackSrc="https://fakeimg.pl/600x400"
          borderTopRadius="20px"
        />
        <Heading pl={8} size="lg">
          Brooklyn Nine-Nine
        </Heading>
        <Text pl={8} pr={8}>
          Comedy series following the exploits of Det. Jake Peralta and his
          diverse, lovable colleagues as they police the NYPD's 99th Precinct.
        </Text>
        <Input
          value={avgRating + " / 5" || "no ratings"}
          pl={8}
          variant="unstyled"
          mb={8}
        ></Input>
      </Flex>
    </Container>
  );
};
