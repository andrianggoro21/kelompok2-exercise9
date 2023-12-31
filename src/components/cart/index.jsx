import {
  Divider,
  Flex,
  Checkbox,
  Box,
  Text,
  Link,
  List,
  Button,
  IconButton,
  Heading,
  Image,
  Center,
} from "@chakra-ui/react";
import { TbCircleMinus } from "react-icons/tb";
import { MdAddCircleOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement, remove } from "../../redux/reducers";
import toRupiah from "@develoka/angka-rupiah-js";

const CompCart = () => {
  const cart = useSelector((state) => state.product.value);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <Box
      display="flex"
      justifyContent='center'
      // mt="4.5em"
      gap='3em'
      sx={{
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
          xl: "row",
          "2xl": "row",
        },
        
      }}
      
    >
      <Box h="100vh" w="50%" textAlign="left" 
      sx={{
        h: {
          xs: "400px",
          sm: "400px",
          md: "400px",
          lg: "100vh",
          xl: "100vh",
          "2xl": "100vh",
        },

        
      }}>
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
              <Text color="grey">Pilih Semua</Text>
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
          {cart.map((item, index) => (
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
                    <Text>{toRupiah(item.price, { formal: false })}</Text>
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
                    <Flex flexDirection="row" alignItems="center" gap="10px">
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
                        onClick={() => dispatch(remove(item.id))}
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
                        onClick={() => dispatch(decrement(item.id))}
                      ></IconButton>
                      <Text>{item.quantity}</Text>
                      <IconButton
                        icon={<MdAddCircleOutline color="green" size="22" />}
                        colorScheme="transparent"
                        onClick={() => dispatch(increment(item.id))}
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
            <Text>{toRupiah(getTotal().totalPrice, { formal: false })}</Text>
          </Flex>
          <Button
            w="100%"
            h="2.5em"
            variant="solid"
            colorScheme="whatsapp"
            fontWeight="bold"
          >
            Beli ({getTotal().totalQuantity})
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompCart;
