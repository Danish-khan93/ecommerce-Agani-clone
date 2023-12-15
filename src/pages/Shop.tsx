import {
  Box,
  Typography,
  Breadcrumbs,
  Pagination,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShopBg from "../assets/headerIcon/SHOPBG.jpg";
import Card from "../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ProductStore, Product } from "../component/types/responseAndStore";
// import { useEffect,useState } from "react";
// import { getAllProduct } from "../redux/features/product/productSlice";
// import { SelectBox } from "../component";
const Shop = () => {
  const breadcrumbs = [
    <Link key="1" to="/">
      Home
    </Link>,
    <Link key="2" to="/shop">
      Shop
    </Link>,
  ];

  const [page, setPage] = useState(1);
  const [urlParam, setUrlsParam] = useState({ limit: 10, skip: 0 });

  console.log(page, "page");

  const { products, isLoading } = useSelector(
    (state: any) => state.productStore
  );
  console.log(products, isLoading);

  // const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    // dispatch(getAllProduct(urlParam));
  }, [urlParam, page]);

  // @ts-ignore
  const handleChange = (e: any, p: number) => {
    setPage(p);
    // setSkip(p * limit);
  };

  // if (loading) return null;

  return (
    <>
      <Box
        className="w-[100%] h-[450px] bg-cover bg-no-repeat flex flex-col items-center justify-center  "
        sx={{ backgroundImage: `url(${ShopBg})` }}
      >
        <Typography className="font-bold text-[48px] text-[#fff] ">
          Shop
        </Typography>
        <Breadcrumbs
          className="text-[#fff]"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box className="bg-[#F9F1E7] h-20 flex items-center pl-5">
        {/* <SelectBox /> */}
      </Box>
      <Box className="flex flex-wrap justify-evenly">
        {isLoading
          ? products.map((value: Product) => {
              return (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={300}
                  height={400}
                  key={value.id}
                />
              );
            })
          : products.map((value: Product) => {
              return (
                <Link to={`/products/${value.id}`} key={value.id}>
                  <Card key={value.id} product={value} />
                </Link>
              );
            })}
      </Box>
      <Box className="flex justify-center my-14">
        <Pagination
          count={10}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="standard"
        />
      </Box>
    </>
  );
};

export default Shop;
