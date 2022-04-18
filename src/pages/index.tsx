import { Divider, Flex, Stack, Text, Image, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Presentation } from "../components/Presentation";
import { Header } from "../components/Header";
import { Option } from "../components/Option";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
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
        <Stack
          width="839px"
          height="101px"
          align="center"
          spacing="1"
          mt="10"
          mr="20"
        >
          <Text fontSize="36" color="gray.900">
            Vamos nessa?
          </Text>

          <Text fontSize="36" color="gray.900">
            Então escolha seu continente
          </Text>
        </Stack>

        <Box width="1240px" height="450px" mt="50px" mb="50px">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src="/images/Europa.svg" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </>
  );
}
