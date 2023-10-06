import React from "react";
import {
  Text,
  Flex,
  HStack,
  Icon,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.product.value);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      w="full"
      p={2.5}
      bg="green.500"
      position="fixed"
      color="white"
      zIndex="10"
    >
      <Flex align="center" fontSize="1.5em">
        <Link to="/">
          <Text fontWeight="bold">Tokped</Text>
        </Link>
      </Flex>

      <HStack spacing={4}>
        <Input
          type="text"
          placeholder="Cari produk di Tokped"
          bg="white"
          size="sm"
          _placeholder={{ color: "gray.500" }}
          color="#000000"
        />
        <Button
          leftIcon={<Icon as={FaSearch} />}
          colorScheme="teal.50"
          size="sm"
        >
          Cari
        </Button>
      </HStack>
      <Link to="/cart" fontWeight="bold" display="flex" color="red.400">
        <IconButton
          icon={<FaShoppingCart size="20" />}
          colorScheme="transparent"
        />
        {cart.length > 0 ? (
          <Flex
            w="1em"
            h="1em"
            transform="translate(20px, -38px)"
            position="absolute"
            borderRadius="100%"
            background="red"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="0.8em" fontWeight="md">
              {getTotalQuantity() || ""}
            </Text>
          </Flex>
        ) : (
          ""
        )}
      </Link>
    </Flex>
  );
}

export default Navbar;
