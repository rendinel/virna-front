import { graphql } from "gatsby"
import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { SingleCatHome } from "../components/SingleCatBlog/SingleCatHome"

export const query = graphql`
  query SingleBlogCategory($id: String!) {
    sanityBlogCategory(id: { eq: $id }) {
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
    allSanityBlogCategory {
      nodes {
        id
        slug {
          current
        }
      }
    }
    allSanityBlog(
      filter: { blogCategory: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        id
        excerpt {
          children {
            text
          }
        }
        title
        publishedAt
        slug {
          current
        }
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
      }
    }
  }
`

const SingleCategory = ({ data }) => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  const catBlog = data.sanityBlogCategory
  const blogsCat = data.allSanityBlog.nodes
  return (
    <ChakraProvider theme={myTheme}>
      <SingleCatHome catBlog={catBlog} blogsCat={blogsCat} />
    </ChakraProvider>
  )
}

export default SingleCategory
