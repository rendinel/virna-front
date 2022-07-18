import {
  // Box,
  // Checkbox,
  // CheckboxGroup,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import React from "react"
import { FiSearch } from "react-icons/fi"
import { Link } from "gatsby"

export const CheckboxFilter = props => {
  const {
    options,
    label,
    hideLabel,
    spacing = "2",
    showSearch,
    ...rest
  } = props
  return (
    <Stack as="fieldset" spacing={spacing}>
      {!hideLabel && (
        <FormLabel fontWeight="semibold" as="legend" mb="0">
          {label}
        </FormLabel>
      )}
      {showSearch && (
        <InputGroup size="md" pb="1">
          <Input
            placeholder="Search..."
            rounded="md"
            focusBorderColor={mode("blue.500", "blue.200")}
          />
          <InputRightElement
            pointerEvents="none"
            color="gray.400"
            fontSize="lg"
          >
            <FiSearch />
          </InputRightElement>
        </InputGroup>
      )}
      {options.map(item => {
        return (
          <Link to="/" key={item.id}>
            {item.title}
          </Link>
        )
      })}
      {/* <CheckboxGroup {...rest}>
        {options.map(option => (
          <Checkbox key={option.id} value={option.id} colorScheme="pink">
            <span>{option.title}</span>
          </Checkbox>
        ))}
      </CheckboxGroup> */}
    </Stack>
  )
}
