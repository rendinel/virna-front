import {
  // Badge,
  Box,
  Heading,
  HStack,
  // Icon,
  // Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { format } from "date-fns"
// import { BsSlashLg } from "react-icons/bs"
import { GatsbyImage } from "gatsby-plugin-image"

export const SingleCatBlogPost = props => {
  const { post, isHero } = props
  return (
    <Link
      _hover={{
        textDecor: "none",
      }}
      role="group"
    >
      <Stack spacing="8">
        <Box overflow="hidden">
          <GatsbyImage
            image={post.coverImage.asset.gatsbyImageData}
            alt={post.coverImage.alt}
            className="blog-img"
          />
          {/* <Image
            src={post.image}
            alt={post.title}
            width="full"
            height={useBreakpointValue({
              base: "15rem",
              md: isHero ? "sm" : "15rem",
            })}
            objectFit="cover"
            transition="all 0.2s"
            _groupHover={{
              transform: "scale(1.05)",
            }}
          /> */}
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
                {post.blogCategory[0].title}
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
            <Text color="muted">{post.excerpt[0].children[0].text}</Text>
          </Stack>
          <HStack>
            <Text color="accent">
              {format(new Date(post.publishedAt), "p, MMM dd yyyy")}
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </Link>
  )
}
