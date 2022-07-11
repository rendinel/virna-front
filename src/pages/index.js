import React from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { extendTheme } from "@chakra-ui/react"
import { Navbar } from "../components/GlobalLayout/Navbar"
import { Footer } from "../components/GlobalLayout/Footer"
import { graphql } from "gatsby"
// import { BlogHome } from "../components/BlogHome/BlogHome"
import { HomePage } from "../components"
// import { SinglePost } from "../components/SinglePost/SinglePost"
// import { Filter } from "../components/ProductHome/Filter/Filter"
// import { ProductDetails } from "../components/ProductHome/ProductDetails/ProductDetails"

export default function Home({ data }) {
  const latestNews = data.allSanityBlog.nodes
  const latestProduct = data.allSanityProduct.nodes

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
        <HomePage latestProduct={latestProduct} latestNews={latestNews} />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export const query = graphql`
  query blogQuery {
    allSanityBlog(sort: { fields: [publishedAt], order: ASC }, limit: 3) {
      nodes {
        id
        slug {
          current
        }
        title
        blogCategory {
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
        publishedAt
        excerpt {
          children {
            text
          }
        }
      }
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
      }
    }
  }
`
