import { HStack, Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <HStack mt={["4", "7"]} ml="auto" mr="auto">
      <Image src="images/Logo.svg" />
    </HStack>
  );
}
