import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Presentation } from "../components/Presentation";
import { Header } from "../components/Header";
import { Option } from "../components/Option";

export default function Home() {
  return (
    <Flex align="center" justify="center" direction="column">
      <Header />
      <Presentation />
      <Option />
      <Divider
        orientation="horizontal"
        width="100px"
        borderBottomWidth="2px"
        borderRadius={1}
        borderColor="black"
        mt="10"
        mr="20"
      />
    </Flex>
  );
}
