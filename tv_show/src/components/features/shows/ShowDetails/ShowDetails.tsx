import { IShow } from "@/typings/show";
import { Container, Image, Heading, Text, Flex } from "@chakra-ui/react";

interface ShowDetailsProps {
  show: IShow;
}

export const ShowDetails = ({ show }: ShowDetailsProps) => {
  return (
    <Container
      padding={0}
      maxW="100%"
      bg="white"
      color="darkblue"
      borderRadius="20px"
    >
      <Flex direction="column" gap={8}>
        <Image
          src={show.imageUrl}
          alt="Show image"
          fallbackSrc="https://fakeimg.pl/600x400"
          borderTopRadius="20px"
        />
        <Heading pl={8} size="lg">
          {show.title}
        </Heading>
        <Text pl={8} pr={8}>
          {show.description}
        </Text>
        <Text pl={8} mb={8}>
          {(show.averageRating !== undefined &&
            show.averageRating !== 0 &&
            show.averageRating + " / 5") ||
            "no ratings"}
        </Text>
      </Flex>
    </Container>
  );
};
