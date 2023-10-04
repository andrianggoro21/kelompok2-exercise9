import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { data } from "../../database/data";

const NewCard = () => {
  return (
    <>
      <Box
        maxW="100vw"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
          {data.map((prop, index) => (
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
                <Image src={prop.path} key={index} />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="20px"
                padding="10px"
              >
                <Box display="flex" flexDirection="column" gap="5px">
                  <Heading size="xs" h="50px" key={index}>
                    {prop.title}
                  </Heading>
                  <Text key={index}>{prop.price}</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Button colorScheme="green" variant="outline" size="xs">
                    Beli Langsung
                  </Button>
                  <Button colorScheme="green" size="xs">
                    +Keranjang
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
