import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { data } from "../../database/data";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducers";
import toRupiah from '@develoka/angka-rupiah-js'

const NewCard = () => {
  const dispatch = useDispatch();

  
  return (
    <>
      <Box
        maxW="100vw"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box display="grid"  sx={{gridTemplateColumns: {xs:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(2, 1fr)', xl:'repeat(4, 1fr)', '2xl':'repeat(4, 1fr)'}}}>
          {data.map((item, index) => (
            <Box
              display="flex"
              flexDirection="column"
              gap="5px"
              w="200px"
              h="350px"
              margin="20px"
              boxShadow="0px 1px 6px 0px #808080"
            >
              <Box w="100%">
                <Image src={item.path} key={index} />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="20px"
                padding="10px"
              >
                <Box display="flex" flexDirection="column" gap="5px">
                  <Heading size="xs" h="50px" key={index}>
                    {item.title}
                  </Heading>
                  <Text key={index}>{toRupiah(item.price, {formal: false})}</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Button colorScheme="green" variant="outline" size="xs">
                    Beli Langsung
                  </Button>
                  <Button
                    colorScheme="green"
                    size="xs"
                    onClick={() => dispatch(add(item))}
                  >
                    +keranjang
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default NewCard;
