import '@/styles/globals.css';
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./index"; // Or wherever your Home component is
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
})


function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;