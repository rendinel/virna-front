import { graphql } from "gatsby"
import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { BlogCatHome } from "../components/CategoryHome/BlogCatHome"

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityBlogCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        _createdAt
      }
    }
  }
`

const CategoryList = ({ data }) => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  const categoriesBlog = data.allSanityBlogCategory.nodes

  return (
    <ChakraProvider theme={myTheme}>
      <BlogCatHome categoriesBlog={categoriesBlog} />
    </ChakraProvider>
  )
}

export default CategoryList
