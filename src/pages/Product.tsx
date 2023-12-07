import {
  Box,
  Typography,
  Breadcrumbs,
  Rating,
  Divider,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { END_POINT_PRODUCTS } from "../Api/EndPoints";
const Product = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState<any>({});
  console.log(product, "products");

  const data = async () => {
    try {
      await axios.get(`${END_POINT_PRODUCTS}${productid}`).then((res) => {
        setProduct(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  console.log(productid, "param ");

  const breadcrumbs = [
    <Link key="1" to="/">
      Home
    </Link>,
    <Link key="2" to="/shop">
      Shop
    </Link>,
    <Link key="3" to={`/products/${productid}`}>
      {product.title}
    </Link>,
  ];

  return (
    <>
      <Box className="bg-[#F9F1E7] h-20 flex items-center pl-5">
        <Breadcrumbs
          className="text-[#000]"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box className="flex justify-evenly gap-5 my-20">
        <Box>
          {product?.images?.map((value: String | any) => {
            return (
              <Typography
                className="w-[100px] h-[100px] rounded-lg"
                component={"img"}
                src={value}
              ></Typography>
            );
          })}
        </Box>
        <Box>
          <Typography
            className="w-[400px] h-[400px] rounded-lg"
            component={"img"}
            src={product.thumbnail}
          ></Typography>
        </Box>
        <Box className="w-[33.33%]">
          <Typography className="text-[42px] text-[#000] ">
            {product.title}
          </Typography>
          <Typography className="text-[24px] text-[#9F9F9F] ">
            $ {product.price}
          </Typography>
          <Box className="flex items-center gap-5 my-5">
            <Rating name="read-only" value={product.rating} readOnly />
            <Divider
              className="text-[#9F9F9F] "
              flexItem
              orientation="vertical"
            />
            <Typography className="text-[16px] text-[#9F9F9F] ">
              {product.rating} Customer Review
            </Typography>
          </Box>
          <Typography className="text-[16px] text-[#000] my-3 ">
            {product.description}
          </Typography>
          <Typography className="text-[18px] text-[#000] my-3 ">
            Category : {product.category}
          </Typography>
          <Box className="flex gap-10">
            <Box className="bg-white text-[#B88E2F] w-[100px] text-[12px] rounded-md font-bold border-solid border-2 border-[#B88E2F] flex justify-center items-center">
              <Button className="text-[#B88E2F]">+</Button> 0
              <Button className="text-[#B88E2F]">-</Button>
            </Box>
            <Button className="bg-white text-[#B88E2F] text-[12px] font-bold rounded-md border-solid border-2 border-[#B88E2F]">
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;
