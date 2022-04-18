import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex align="center" justify="center" direction="column">
      <Header />
      <HStack mt={["3", "5"]} paddingRight={["330", "1200"]}>
        <Stack spacing={3}>
          <Text
            color="white.900"
            position="absolute"
            fontSize={["12", "36"]}
            pt={["22", "75"]}
          >
            5 Continentes,
          </Text>
          <Text
            color="white.900"
            position="absolute"
            fontSize={["12", "36"]}
            pt={["25", "120"]}
          >
            infinitas possibilidades.
          </Text>
          <Text
            color="white.900"
            position="absolute"
            fontSize={["6", "20"]}
            pt={["50", "200"]}
          >
            Chegou a hora de tirar do papel a viagem que você
          </Text>
          <Text
            color="white.900"
            position="absolute"
            fontSize={["6", "20"]}
            pt={["59", "227"]}
          >
            sempre sonhou.
          </Text>
        </Stack>
      </HStack>
      <Stack>
        <Image
          src="/images/AirPlane.svg"
          position="absolute"
          mt={["25", "94"]}
          ml={["45", "100"]}
          width={["120px", "417.15px"]}
          height={["95", "270.74"]}
        />
      </Stack>
      <Image src="/images/Background.svg" width={"2174px"} />
    </Flex>
  );
}
