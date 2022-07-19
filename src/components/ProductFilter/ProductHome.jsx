import { Box } from "@chakra-ui/react"
import * as React from "react"
import { ProductCard } from "./ProductCard"
// import { products } from "./_data"
import { ProductGrid } from "./ProductGrid"

export const ProductHome = ({ productsCat }) => {
  console.log("from home", productsCat)
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <ProductGrid>
        {productsCat.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  )
}
