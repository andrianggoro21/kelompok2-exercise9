import { Box } from "@chakra-ui/react";
import CompCart from "../../components/cart";

const PageCart = () => {
  return (
    <>
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
