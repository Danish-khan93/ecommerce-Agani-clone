// @ts-ignore
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, IconButton, Checkbox, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { RootState } from "../redux/store";
import { PRODUCT } from "../component/types/responseAndStore";

const Cart = () => {
  
  const cartProduct: PRODUCT[] = useSelector((state: RootState) => state.cart);
  console.log(cartProduct);
  if (cartProduct.length === 0)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl p-4 border border-gray-300 rounded text-center">
          Your cart is empty
        </p>
      </div>
    );
  return (
    <>
      <Box className="flex justify">
        <Box className="">
          {cartProduct &&
            cartProduct.map((value: PRODUCT) => {
              return (
                <Box
                  key={value.id}
                  className="flex justify-evenly gap-4 w-[70%] h-[200px] items-center bg-[#FFF3E3] mx-auto my-5 rounded-md px-2 shadow-md"
                >
                  <Box>
                    <Checkbox />
                  </Box>
                  <Box>
                    <Typography
                      className="w-[150px] h-[150px]"
                      component={"img"}
                      src={value.thumbnail}
                    ></Typography>
                  </Box>
                  <Box className="flex flex-col gap-4">
                    <Typography className="text-[23px] font-semibold">
                      {value.title}
                    </Typography>
                    <Typography>{value.description}</Typography>
                    <Typography>Stock {value.stock}</Typography>
                  </Box>
                  <Box>
                    <Typography>$ {value.price}</Typography>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Box className="bg-white text-[#B88E2F] w-[100px] text-[12px] rounded-md font-bold border-solid border-2 border-[#B88E2F] flex justify-center items-center">
                    <Button className="text-[#B88E2F]">-</Button>
                    <Typography>{0}</Typography>
                    <Button className="text-[#B88E2F]">+</Button>
                  </Box>
                </Box>
              );
            })}
        </Box>
        <Box className="flex flex-col justify-around  w-[20%] h-[200px] items-center bg-[#FFF3E3] mx-auto my-5 rounded-md shadow-md">
          <Box className="text-center">
            <Typography className="text-[32px]">Order Summary</Typography>
          </Box>
          <Box className="text-center">
            <Typography>Subtotal ( 0 items )</Typography>
          </Box>
          <Box className="flex gap-20">
            <Typography>Total</Typography>
            <Typography>Total</Typography>
          </Box>
          <Box className="flex justify-center">
            <Button className="bg-[#B88E2F] text-[#fff] text-[12px] font-bold rounded-md border-solid border-2 border-[#B88E2F] py-[12px] px-[16px]">
              Proceed To Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
