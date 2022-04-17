import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: {
      900: "#F5F8FA",
    },
    gray: {
      900: "#47585B",
      500: "#DADADA",
    },
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  styles: {
    global: {
      body: {
        bg: "F5F8FA",
      },
    },
  },
});
