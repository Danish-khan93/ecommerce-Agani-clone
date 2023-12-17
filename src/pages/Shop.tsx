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
import { useState, useEffect, useRef } from "react";
import { PRODUCT, URLPARAM } from "../component/types/responseAndStore";
import { getAllProduct } from "../redux/features/product/productSlice";
import { AppDispatch } from "../redux/store";
import { SelectBox } from "../component";


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
  
  const load = useRef<Boolean>(false);
  const urlParams2 = useRef<URLPARAM>({ limit: 10, skip: 0 });

  const { products, isLoading } = useSelector(
    (state: any) => state.productStore
  );
  

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!load.current && products.length === 0)
    
      dispatch(getAllProduct(urlParams2.current));
    return () => {
      load.current = true;
    };
  }, []);

  
  const handleChange = (e: any, p: number) => {
  console.log(e , "event");
  
    setPage(p);
    if (products.length < urlParams2.current.limit * p) {
      urlParams2.current.skip =
        urlParams2.current.limit * p - urlParams2.current.limit;
      dispatch(getAllProduct(urlParams2.current));
    }
  };

  

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
        <SelectBox />
      </Box>
      <Box className="flex flex-wrap justify-evenly">
        {isLoading
          ? products.map((value: PRODUCT) => {
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
          : products
              .slice(
                page * urlParams2.current.limit - urlParams2.current.limit,
                page * urlParams2.current.limit
              )
              .map((value: PRODUCT) => {
                return (
                  <Link to={`/products/${value.id}`} key={value.id}>
                    <Card key={value.id} product={value} />
                  </Link>
                );
              })}
      </Box>
      <Box className="flex justify-center my-14">
        <Pagination
          page={page}
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
