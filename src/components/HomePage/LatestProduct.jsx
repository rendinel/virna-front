import {
  // Avatar,
  // HStack,
  // Image,
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const LatestProduct = ({ latestProduct }) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })
  return (
    <Box bg="bg-surface">
      <Container
        py={{
          base: "16",
          md: "24",
        }}
      >
        <Stack
          spacing={{
            base: "12",
            md: "16",
          }}
        >
          <Stack direction="row" justify="space-between">
            <Stack
              spacing={{
                base: "4",
                md: "5",
              }}
            >
              <Stack spacing="3">
                <Text
                  color="accent"
                  fontWeight="semibold"
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  Our blog
                </Text>
                <Heading
                  size={useBreakpointValue({
                    base: "sm",
                    md: "md",
                  })}
                >
                  Latest blog posts
                </Heading>
              </Stack>
              <Text
                color="muted"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
              >
                Ice cream pudding dragée macaroon donut marzipan chocolate
              </Text>
            </Stack>
            {!isMobile && (
              <Button variant="primary" size="lg">
                Show all
              </Button>
            )}
          </Stack>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            gap={{
              base: "12",
              lg: "8",
            }}
          >
            {latestProduct.map(item => (
              <Link
                to={`/product/${item.slug.current}`}
                key={item.id}
                _hover={{
                  textDecor: "none",
                }}
                role="group"
              >
                <Stack spacing="8">
                  <Box overflow="hidden">
                    <GatsbyImage
                      className="blog-img"
                      image={item.coverImage.asset.gatsbyImageData}
                      alt={item.coverImage.alt}
                    />
                    {/* <Image
                      src={post.image}
                      alt={post.title}
                      width="full"
                      height="15rem"
                      objectFit="cover"
                      transition="all 0.2s"
                      _groupHover={{
                        transform: "scale(1.05)",
                      }}
                    /> */}
                  </Box>
                  <Stack spacing="3">
                    <Text fontSize="sm" fontWeight="semibold" color="accent">
                      {item.productCategory[0].title}
                    </Text>
                    <Heading size="xs">{item.name}</Heading>
                  </Stack>
                  {/* <HStack>
                    <Avatar src={post.author.avatarUrl} boxSize="10" />
                    <Box fontSize="sm">
                      <Text fontWeight="medium">{post.author.name}</Text>
                      <Text color="muted">{post.publishedAt}</Text>
                    </Box>
                  </HStack> */}
                </Stack>
              </Link>
            ))}
          </SimpleGrid>
          {isMobile && (
            <Button variant="primary" size="lg">
              Show all
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
