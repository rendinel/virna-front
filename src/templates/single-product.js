import React from "react"
import { graphql } from "gatsby"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { Box } from "@chakra-ui/react"
import { Navbar } from "../components/GlobalLayout/Navbar"
import { Footer } from "../components/GlobalLayout/Footer"
import { ProductDetails } from "../components/ProductHome/ProductDetails/ProductDetails"

export const productQuery = graphql`
  query SingleProductQuery($id: String!) {
    sanityProduct(id: { eq: $id }) {
      name
      publishedAt
      _rawProductDescription
      imagesGallery {
        asset {
          gatsbyImageData
        }
      }
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      productCategory {
        title
        slug {
          current
        }
      }
      productDescription {
        children {
          text
        }
      }
      price
    }
    allSanityProduct(sort: { fields: [publishedAt], order: ASC }, limit: 3) {
      nodes {
        id
        slug {
          current
        }
        name
        publishedAt
        productCategory {
          title
          slug {
            current
          }
        }
        coverImage {
          asset {
            gatsbyImageData
          }
          alt
        }
        price
      }
    }
  }
`

const SingleProduct = ({ data }) => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  const product = data.sanityProduct
  const recomendedProduct = data.allSanityProduct.nodes
  return (
    <ChakraProvider theme={myTheme}>
      <Box>
        <Navbar />
        <ProductDetails
          product={product}
          recomendedProduct={recomendedProduct}
        />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default SingleProduct
