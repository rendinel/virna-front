import React from "react"
import { graphql } from "gatsby"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { Box } from "@chakra-ui/react"
import { Navbar } from "../components/GlobalLayout/Navbar"
import { Footer } from "../components/GlobalLayout/Footer"
import { Filter } from "../components/ProductHome/Filter/Filter"

export const ProductQuery = graphql`
  query productListQuery($limit: Int!, $offset: Int!) {
    allSanityProduct(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        publishedAt
        productCategory {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        available
        price
      }
    }
    allSanityProductCategory {
      nodes {
        id
        title
        slug {
          current
        }
      }
    }
  }
`

const ProductList = ({ data, pageContext }) => {
  const { productsLength } = pageContext
  const products = data.allSanityProduct.nodes
  const allCatHome = data.allSanityProductCategory.nodes
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Box bg="white">
        <Navbar />
        <Filter
          allCatHome={allCatHome}
          productsLength={productsLength}
          products={products}
        />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default ProductList
