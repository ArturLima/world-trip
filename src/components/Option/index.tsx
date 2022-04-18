import { Box, HStack, Image, Text } from "@chakra-ui/react";

export const Option = () => {
  return (
    <HStack width="1160px" height="145px" mt={20} spacing="120">
      <Box>
        <Image src="/images/Vector_Drink.svg" m="auto" />
        <Text color="gray.900" mt="4" fontSize="24px">
          Vida noturna
        </Text>
      </Box>
      <Box>
        <Image src="/images/Vector_beach.svg" m="auto" />
        <Text color="gray.900" mt="4" fontSize="24px">
          Praia
        </Text>
      </Box>
      <Box>
        <Image src="/images/Vector_building.svg" m="auto" />
        <Text color="gray.900" mt="4" fontSize="24px">
          Moderno
        </Text>
      </Box>
      <Box>
        <Image src="/images/Vector_museum.svg" m="auto" />
        <Text color="gray.900" mt="4" fontSize="24px">
          clássico
        </Text>
      </Box>
      <Box>
        <Image src="/images/Vector_earth.svg" m="auto" />
        <Text color="gray.900" mt="4" fontSize="24px">
          e mais...
        </Text>
      </Box>
    </HStack>
  );
};
