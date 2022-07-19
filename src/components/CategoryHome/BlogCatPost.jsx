import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const BlogCatPost = props => {
  const { post, isHero } = props
  return (
    <Link to={`/blogs/categories/${post.slug.current}`}>
      <Stack spacing="8">
        <Box overflow="hidden">
          <GatsbyImage
            image={post.coverImage.asset.gatsbyImageData}
            alt={post.coverImage.alt}
            className="blog-img"
          />
        </Box>
        <Stack spacing="6">
          <Stack spacing="3">
            <HStack
              spacing="1"
              fontSize="sm"
              fontWeight="semibold"
              color="accent"
            >
              <Text fontSize="sm" fontWeight="semibold" color="accent">
                {post.title}
              </Text>
            </HStack>
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: isHero ? "sm" : "xs",
              })}
            >
              {post.title}
            </Heading>
            <Text color="muted">
              {post._rawDescription[0].children[0].text}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Link>
  )
}
