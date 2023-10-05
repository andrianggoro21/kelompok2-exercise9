import React from "react";
import { Flex, HStack, Icon, Input, Link, Button } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      p={4}
      bg="green.500"
      color="white"
    >
      <Flex align="center">
        <Link href="/" fontWeight="bold">
          Tokped
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
      <Flex>
        <Link href="/cart" fontWeight="bold">
          <Icon as={FaShoppingCart} />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
