import React from "react"
import { graphql } from "gatsby"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { BlogHome } from "../components/BlogHome/BlogHome"

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
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
        excerpt {
          children {
            text
          }
        }
      }
    }
  }
`

const BlogList = ({ data, pageContext }) => {
  const { currentPage, numberOfPages } = pageContext
  const blogs = data.allSanityBlog.nodes
  console.log(blogs, "home")
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <BlogHome
        numPages={numberOfPages}
        currentPage={currentPage}
        blogs={blogs}
      />
    </ChakraProvider>
  )
}

export default BlogList
