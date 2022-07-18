import {
  Box,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { FiSearch } from "react-icons/fi"
import { SingleCatBlogPost } from "./SingleCatBlogPost"

export const SingleCatHome = ({ catBlog, blogsCat }) => {
  return (
    <Box bg="bg-surface">
      <Box bg="bg-accent" color="on-accent">
        <Container
          pt={{
            base: "16",
            md: "24",
          }}
          pb={{
            base: "32",
            md: "48",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            align="center"
          >
            <Stack
              spacing={{
                base: "4",
                md: "6",
              }}
              textAlign="center"
            >
              <Stack spacing="4">
                <Text
                  fontWeight="semibold"
                  color="blue.50"
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  {catBlog.title}
                </Text>
                <Heading
                  size={useBreakpointValue({
                    base: "md",
                    md: "lg",
                  })}
                >
                  Latest {catBlog.title} posts
                </Heading>
              </Stack>
              <Text
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
                maxW="2xl"
                color="on-accent-muted"
              >
                {catBlog.description[0].children[0].text}
              </Text>
            </Stack>
            <InputGroup
              size="lg"
              maxW={{
                md: "sm",
              }}
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="on-accent" boxSize="5" />
              </InputLeftElement>
              <Input placeholder="Search" variant="filled" colorScheme="blue" />
            </InputGroup>
          </Stack>
        </Container>
      </Box>
      <Container
        pb={{
          base: "16",
          md: "24",
        }}
        mt={{
          base: "-16",
          md: "-24",
        }}
      >
        <Stack
          spacing={{
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
            <SingleCatBlogPost post={blogsCat[0]} isHero />
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
              {blogsCat.map(post => (
                <SingleCatBlogPost key={post.id} post={post} />
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
