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
} from "@chakra-ui/react";
import { TbCircleMinus } from "react-icons/tb";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { increment, decrement } from "../../redux/reducers";
import toRupiah from '@develoka/angka-rupiah-js';

const CompCart = () => {
  const cart = useSelector((state) => state.product.value)
  const dispatch = useDispatch()

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  

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
            {cart.map((item, index) => (
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
                      <Text>{toRupiah(item.price, {formal: false})}</Text>
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
                          onClick={() => dispatch(decrement(item.id))}
                        ></IconButton>
                        <Text>{item.quantity}</Text>
                        <IconButton
                          icon={<MdAddCircleOutline color="green" size="22" />}
                          colorScheme="transparent"
                          onClick={() => dispatch(increment(item.id))}
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
              <Text fontWeight="bold">Total Harga</Text>
              <Text>{toRupiah(getTotal().totalPrice, {formal: false})}</Text>
            </Box>
            <Button w="100%" variant="solid" colorScheme="whatsapp">
              Beli ({getTotal().totalQuantity})
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompCart;





