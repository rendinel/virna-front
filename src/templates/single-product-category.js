import { graphql } from "gatsby"
import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { Box } from "@chakra-ui/react"
import { Navbar } from "../components/GlobalLayout/Navbar"
import { Footer } from "../components/GlobalLayout/Footer"
import { ProductFilter } from "../components/ProductFilter/ProductFilter"
export const query = graphql`
  query SingleCategory($id: String!) {
    sanityProductCategory(id: { eq: $id }) {
      title
      id
      slug {
        current
      }
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      description {
        children {
          text
        }
      }
    }
    allSanityProduct(
      filter: { productCategory: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        id
        name
        publishedAt
        price
        slug {
          current
        }
        productCategory {
          title
          slug {
            current
          }
          coverImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
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

const SingleProductCategory = ({ data }) => {
  const catProduct = data.sanityProductCategory
  const productsCat = data.allSanityProduct.nodes
  const allCat = data.allSanityProductCategory.nodes
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Box>
        <Navbar />
        <ProductFilter
          productsCat={productsCat}
          allCat={allCat}
          catProduct={catProduct}
        />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default SingleProductCategory
