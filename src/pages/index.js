import React from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { extendTheme } from "@chakra-ui/react"
import { Navbar } from "../components/GlobalLayout/Navbar"
import { Footer } from "../components/GlobalLayout/Footer"
// import { BlogHome } from "../components/BlogHome/BlogHome"
// import { HomePage } from "../components"
// import { SinglePost } from "../components/SinglePost/SinglePost"
// import { Filter } from "../components/ProductHome/Filter/Filter"
import { Checkout } from "../components/Checkout/Checkout"
// import { ProductDetails } from "../components/ProductHome/ProductDetails/ProductDetails"

export default function Home() {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Box bg="bg-surface">
        <Navbar />
        <Checkout />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
