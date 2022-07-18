import React from "react"
import { graphql } from "gatsby"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { Box } from "@chakra-ui/react"
import { Navbar } from "../components/GlobalLayout/Navbar"
import { Footer } from "../components/GlobalLayout/Footer"
import { ProductHome } from "../components/ProductHome/ProductHome"
import { Pagination } from "../components/Pagination"
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
  }
`

const ProductList = ({ data, pageContext }) => {
  const { productsLength } = pageContext
  // const prevPage =
  //   currentPage - 1 === 0 || currentPage - 1 === 1
  //     ? `/products`
  //     : `/products/${currentPage - 1}`

  // const nextPage =
  //   currentPage === numberOfPages
  //     ? `/products/${currentPage}`
  //     : `/products/${currentPage + 1}`
  const products = data.allSanityProduct.nodes
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
        <Filter productsLength={productsLength} products={products} />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default ProductList
