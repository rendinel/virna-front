import {
  // Badge,
  Box,
  Heading,
  HStack,
  Icon,
  // Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { VscCircleFilled } from "react-icons/vsc"
import { GatsbyImage } from "gatsby-plugin-image"
import { format } from "date-fns"
import MyPortableText from "../MyPortableText"

export const BlogPostDetail = props => {
  const { blog, isHero } = props
  return (
    <Link
      _hover={{
        textDecor: "none",
      }}
      role="group"
    >
      <Stack spacing="8">
        <Box
          transition="all 0.2s"
          _groupHover={{
            transform: "scale(1.05)",
          }}
          overflow="hidden"
          height={useBreakpointValue({
            base: "15rem",
            md: isHero ? "sm" : "15rem",
          })}
        >
          <GatsbyImage
            image={blog.coverImage.asset.gatsbyImageData}
            alt={blog.coverImage.alt}
            width="100%"
            objectFit="cover"
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
              <Text>{blog.blogCategory[0].title}</Text>
              <Icon as={VscCircleFilled} boxSize="2" />
              <Text>
                {format(new Date(blog.publishedAt), "p, MMM dd yyyy")}
              </Text>
            </HStack>
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: isHero ? "sm" : "xs",
              })}
            >
              {blog.title}
            </Heading>
            <MyPortableText value={blog._rawBody} />
          </Stack>
          {/* <HStack>
            {post.tags.map((tag, id) => (
              <Badge key={id} colorScheme={tag.color}>
                {tag.label}
              </Badge>
            ))}
          </HStack> */}
        </Stack>
      </Stack>
    </Link>
  )
}
