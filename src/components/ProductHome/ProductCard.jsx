import {
  AspectRatio,
  Box,
  Button,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
import { PriceTag } from "./PriceTag"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const ProductCard = props => {
  const { product, rootProps } = props

  return (
    <Stack
      spacing={useBreakpointValue({
        base: "4",
        md: "5",
      })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <GatsbyImage
            image={product.coverImage.asset.gatsbyImageData}
            alt={product.coverImage.alt}
          />
          {/* <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: "md",
              md: "xl",
            })}
          /> */}
        </AspectRatio>
      </Box>
      <Stack>
        <Stack minH="76px" spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {product.name}
          </Text>
          <PriceTag price={product.price} currency="EUR" />
        </Stack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="pink" isFullWidth>
          Add to cart
        </Button>
        <Link to={`/products/${product.slug.current}`}>
          <Text
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Go to Product
          </Text>
        </Link>
      </Stack>
    </Stack>
  )
}
