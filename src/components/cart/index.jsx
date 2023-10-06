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
import { FiTrash2 } from "react-icons/fi";

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
      <Box display="flex" flexDirection="row" mt="1em" gap="3em">
        <Box h="100vh" textAlign="left">
          <Box lineHeight="2.5em">
            <Heading as="h4" size="md" fontWeight="bold">
              Keranjang
            </Heading>
            <Flex flexDirection="row" justifyContent="space-between">
              <Checkbox
                size="md"
                colorScheme="green"
                borderColor="black"
                _hover={{ borderColor: "green" }}
              >
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
          <Divider
            mb="1em"
            boxShadow="1px 1px 1.5px 0.2px grey"
            orientation="horizontal"
          />
          <Box>
            {data.map((item, index) => (
              <Box key={index} w="100%" pb="1em">
                <List display="flex" flexDirection="column">
                  <Flex flexDirection="row">
                    <Flex flexDirection="column">
                      <Checkbox
                        size="md"
                        colorScheme="green"
                        borderColor="black"
                        _hover={{ borderColor: "green" }}
                      >
                        <Text fontWeight="bold" fontSize="1em">
                          {item.store}
                        </Text>
                      </Checkbox>
                      <Text ml="1.5em" fontSize="1em">
                        {item.city}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex flexDirection="row" gap="1em">
                    <Checkbox
                      size="md"
                      colorScheme="green"
                      borderColor="black"
                      _hover={{ borderColor: "green" }}
                    >
                      <Flex
                        border="1px solid black"
                        borderColor="gray.200"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Image src={item.path} />
                      </Flex>
                    </Checkbox>
                    <Flex flexDirection="column">
                      <Text>{item.title}</Text>
                      <Text>{item.price}</Text>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                  >
                    <Flex
                      flexDirection="row"
                      justifyContent="space-between"
                      w="80%"
                      ml="1.5em"
                      fontSize="0.9em"
                      alignItems="center"
                    >
                      <Link
                        color="green"
                        textDecorationLine="none"
                        _hover={{ textDecoration: "none" }}
                      >
                        Tulis Catatan
                      </Link>
                      <Flex
                        flexDirection="row"
                        alignItems="center"
                        gap="10px"
                      >
                        <Link
                          color="grey"
                          textDecorationLine="none"
                          _hover={{ textDecoration: "none" }}
                        >
                          Pindahkan ke Wishlist
                        </Link>
                        <Center height="1.5em">
                          <Divider
                            boxShadow="1px 1px 1.5px 0.2px grey"
                            orientation="vertical"
                          />
                        </Center>
                        <IconButton
                          icon={<FiTrash2 color="green" size="22" />}
                          colorScheme="transparent"
                        />
                      </Flex>
                    </Flex>
                    <Flex
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Flex
                        w="100px"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
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
                      </Flex>
                    </Flex>
                  </Flex>
                </List>
                <Divider
                  boxShadow="1px 1px 1.5px 0.2px grey"
                  orientation="horizontal"
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box p="1em">
          <Box
            w="350px"
            p="1em"
            background="white"
            textAlign="left"
            lineHeight="2em"
            boxShadow="0.5px 2px 5px 0.2px grey"
            rounded="md"
          >
            <Text fontWeight="bold">Ringkasan Belanja</Text>
            {/* <Flex
              flexDirection="row"
              justifyContent="space-between"
              color="grey"
            >
              <Text>Total Harga ({count} barang)</Text>
              <Text>Rp. 0</Text>
            </Flex> */}
            <Divider
              boxShadow="1px 1px 1.5px 0.2px grey"
              orientation="horizontal"
            />
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              lineHeight="3em"
              fontWeight="bold"
            >
              <Text>Total Harga</Text>
              <Text>-</Text>
            </Flex>
            <Button
              w="100%"
              h="2.5em"
              variant="solid"
              colorScheme="whatsapp"
              fontWeight="bold"
            >
              Beli (0)
            </Button>
          </Box>
        </Box>
      </Box>
  );
};

export default CompCart;
