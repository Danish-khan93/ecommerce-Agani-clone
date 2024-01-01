// @ts-ignore
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, IconButton, Checkbox, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppDispatch, RootState } from "../redux/store";
import { PRODUCT } from "../component/types/responseAndStore";
import {
  incrementQunatity,
  decrementQunatity,
  removeProduct,
} from "../redux/features/Cart/cartSlice";
type VALUETYPE = {
  quantity: number;
  product: PRODUCT;
};
const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productInCart } = useSelector((state: RootState) => state.cart);
  console.log(productInCart);
  if (productInCart.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl p-4 border border-gray-300 rounded text-center">
          Your cart is empty
        </p>
      </div>
    );
  }
  return (
    <>
      <Box className="flex justify">
        <Box className="">
          {productInCart &&
            productInCart.map(
              // @ts-ignore
              (value: VALUETYPE) => {
                console.log(value);

                return (
                  <Box
                    key={value.product.id}
                    className="flex justify-evenly gap-4 w-[70%] h-[200px] items-center bg-[#FFF3E3] mx-auto my-5 rounded-md px-2 shadow-md"
                  >
                    <Box>
                      <Checkbox
                        onChange={(e: any) => console.log(e?.target?.value)}
                      />
                    </Box>
                    <Box>
                      <Typography
                        className="w-[150px] h-[150px]"
                        component={"img"}
                        src={value.product.thumbnail}
                      ></Typography>
                    </Box>
                    <Box className="flex flex-col gap-4">
                      <Typography className="text-[23px] font-semibold">
                        {value.product.title}
                      </Typography>
                      <Typography>{value.product.description}</Typography>
                      <Typography>Stock {value.product.stock}</Typography>
                    </Box>
                    <Box>
                      <Typography>$ {value.product.price}</Typography>
                      <IconButton
                        onClick={() => {
                          dispatch(removeProduct(value?.product?.id));
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                    <Box className="bg-white text-[#B88E2F] w-[100px] text-[12px] rounded-md font-bold border-solid border-2 border-[#B88E2F] flex justify-center items-center">
                      <Button
                        onClick={() => {
                          if (value?.quantity !== 0)
                            dispatch(decrementQunatity(value?.product?.id));
                        }}
                        className="text-[#B88E2F]"
                      >
                        -
                      </Button>
                      <Typography>{value?.quantity}</Typography>
                      <Button
                        onClick={() => {
                          if (value?.quantity !== value.product.stock)
                            dispatch(incrementQunatity(value?.product?.id));
                        }}
                        className="text-[#B88E2F]"
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                );
              }
            )}
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
