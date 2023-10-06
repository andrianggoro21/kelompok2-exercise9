import React from "react";
import { Flex, HStack, Icon, Input, Button } from "@chakra-ui/react";
import { Flex, HStack, Icon, Input, Link, Button, IconButton, Text } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
 const cart = useSelector((state) => state.product.value)

 const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}

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
        <Link to="/" fontWeight="bold">
      <Flex align="center" fontSize='1.5em'>
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
        <Link to="/cart" fontWeight="bold" display='flex' alignItems='center' gap='10px'>
          <Icon as={FaShoppingCart} />
          {/* {count} */}
          <p>{getTotalQuantity() || ""}</p>
      
        <Link href="/cart" fontWeight="bold" display='flex' color='red.400'>
          <IconButton icon={<FaShoppingCart size= '25' />} colorScheme='transparent' />
          <Button position='absoulute' transform='translate(-60%, -30%)' borderRadius='50%' size='xs' fontSize='1em' fontWeight='bold' colorScheme="red">{count} </Button>
        </Link>
      </Flex>
  
  );
}

export default Navbar;
