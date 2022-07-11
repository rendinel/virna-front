import { graphql } from "gatsby"
import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { SinglePost } from "../components/SinglePost/SinglePost"

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      excerpt {
        children {
          text
        }
      }
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      blogCategory {
        title
        slug {
          current
        }
      }
    }
  }
`

const SingleBlog = ({ data }) => {
  const blog = data.sanityBlog
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <SinglePost blog={blog} />
    </ChakraProvider>
  )
}

export default SingleBlog
