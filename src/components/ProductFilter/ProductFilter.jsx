import React from "react"
import { Box, Grid, Heading, Stack } from "@chakra-ui/react"
import { CheckboxFilter } from "./CheckboxFilter"
import { ProductHome } from "./ProductHome"
import DrawerSearch from "../DrawerSearch"

export const ProductFilter = ({ allCat, productsCat }) => {
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
      <Box
        mt={{
          base: "8",
          md: "16",
        }}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "240px 1fr",
          }}
          gap="14"
        >
          <Stack
            spacing="10"
            maxW="240px"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <CheckboxFilter
              spacing="3"
              options={allCat}
              label="Brand"
              showSearch
            />
          </Stack>
          <Box width="full">
            <Stack
              spacing={{
                base: "6",
                md: "4",
              }}
              direction={{
                base: "column",
                md: "row",
              }}
              justify="space-between"
              align="flex-start"
              width="full"
            >
              <Stack
                direction={{
                  base: "column",
                  md: "row",
                }}
                align="baseline"
              >
                <Heading size="md" fontSize="2xl">
                  Prodotti ({productsCat.length})
                </Heading>
              </Stack>
              <Box>
                <DrawerSearch allCat={allCat} />
              </Box>
            </Stack>
            <ProductHome productsCat={productsCat} />
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}
