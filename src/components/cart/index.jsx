import {
  Divider,
  Center,
  Flex,
  Checkbox,
  Box,
  Text,
  Link,
  List,
  Button,
  IconButton,
  Heading,
  useCounter,
  Image,
} from "@chakra-ui/react";
// import { DeleteIcon, MinusIcon, AddIcon } from "@chakra-ui/icons";

import { TbCircleMinus } from "react-icons/tb";
import { MdAddCircleOutline } from "react-icons/md";

import { useState, useEffect } from "react";
import { data } from "../../database/data";

const CompCart = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <Box display="block" position="static">
      <Box display="flex" flexDirection="row">
        <Box w="700px" h="100vh" textAlign="left">
          <Box>
            <Heading as="h4" size="md" fontWeight="bold">
              Keranjang
            </Heading>
            <Flex flexDirection="row" justifyContent="space-between">
              <Checkbox>
                <Text color="grey" position="sticky" top="0">
                  Pilih Semua
                </Text>
              </Checkbox>
              <Link
                color="green"
                fontWeight="bold"
                textDecorationLine="none"
                _hover={{ textDecoration: "none" }}
              >
                Hapus
              </Link>
            </Flex>
          </Box>
          <Divider h="5px" background="grey.600" orientation="horizontal" />
          <Box>
            {data.map((item, index) => (
              <Box key={index} w="100%">
                <List display="flex" flexDirection="column">
                  <Box display="flex" flexDirection="row">
                    <Box display="flex" flexDirection="column">
                      <Checkbox>
                        <Text fontWeight="bold">{item.store}</Text>
                      </Checkbox>
                      <Text ml="1.5em">{item.city}</Text>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="row" gap="1em">
                    <Checkbox>
                      <Box
                        border="1px solid black"
                        borderColor="gray.200"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Image src={item.path} />
                      </Box>
                    </Checkbox>
                    <Box display="flex" flexDirection="column">
                      <Text>{item.title}</Text>
                      <Text>{item.price}</Text>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      w="400px"
                      ml="1.5em"
                      fontSize="0.9em"
                    >
                      <Link
                        color="green"
                        textDecorationLine="none"
                        _hover={{ textDecoration: "none" }}
                      >
                        Tulis Catatan
                      </Link>
                      <Text color="grey">Pindahkan ke Wishtlist</Text>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                      w="200px"
                    >
                      <Box>
                        {/* <IconButton icon={<DeleteIcon />} h="10px"></IconButton> */}
                      </Box>
                      <Box
                        w="100px"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {/* <FiMinusCircle/> */}
                        <IconButton
                          icon={<TbCircleMinus color="green" size="22" />}
                          colorScheme="transparent"
                          onClick={decrement}
                        ></IconButton>
                        <Text>{count}</Text>
                        <IconButton
                          icon={<MdAddCircleOutline color="green" size="22" />}
                          colorScheme="transparent"
                          onClick={increment}
                        ></IconButton>
                      </Box>
                    </Box>
                  </Box>
                </List>
              </Box>
            ))}
          </Box>
        </Box>
        <Box w="500px" p="1em">
          <Box
            w="350px"
            p="1em"
            background="white"
            textAlign="left"
            borderRadius="0.5em"
            border="1px solid grey"
          >
            <Text fontWeight="bold">Ringkasan Belanja</Text>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text>Total Harga ({count} barang)</Text>
              <Text>Rp. 0</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text fontWeight="bold">Total Harga</Text>
              <Text>-</Text>
            </Box>
            <Button w="100%" variant="solid" colorScheme="whatsapp">
              Beli (0)
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompCart;
