import { Box, Text, Button } from "@chakra-ui/react";
import CompCart from "../../components/cart";
import Navbar from "../../components/navbar";

const PageCart = () => {
  return (
    <>
      <Navbar />
      <Box maxW="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        ml="7%"
        mr="7%">
        <CompCart></CompCart>
      </Box>
    </>
  );
};

export default PageCart;
