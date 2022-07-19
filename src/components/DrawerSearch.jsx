import React, { useRef } from "react"
import {
  Drawer,
  DrawerBody,
  StackDivider,
  IconButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"
import { Link } from "gatsby"

const DrawerSearch = ({ allCat, isNav }) => {
  const [isLargerThan767] = useMediaQuery("(min-width: 768px)")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      {isNav && (
        <IconButton
          ref={btnRef}
          variant="primary"
          onClick={onOpen}
          icon={<FiSearch fontSize="1.25rem" />}
          aria-label="Search"
        />
      )}
      {!isLargerThan767 && !isNav && (
        <Button ref={btnRef} variant="primary" onClick={onOpen}>
          Ricerca
        </Button>
      )}
      <Drawer
        size="full"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Categorie
            <VStack
              divider={<StackDivider borderColor="pink.500" />}
              spacing={2}
              align="stretch"
            >
              <Link to={`/products`}>All</Link>
              {allCat.map(item => {
                return (
                  <Link
                    to={`/products/categories/${item.slug.current}`}
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                )
              })}
            </VStack>
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerSearch
