import { Box, Text, Button } from "@chakra-ui/react";
import CompCart from "../../components/cart";
import Navbar from "../../components/navbar";

const PageCart = () => {
  return (
    <>
      <Navbar />
      <Box ml="100px" mr="100px" align="center" position="relative">
        <CompCart></CompCart>
      </Box>
    </>
  );
};

export default PageCart;
