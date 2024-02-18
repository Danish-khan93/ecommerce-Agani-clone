import { Box, Typography, Skeleton } from "@mui/material";
import { HeroSection, Card, SecondHeroSetcion } from "../component";
import { getAllProduct } from "../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { AppDispatch } from "../redux/store";
import { PRODUCT, URLPARAM } from "../component/types/responseAndStore";
import { Link } from "react-router-dom";
const Home = () => {
  const load = useRef<Boolean>(false);

  // @ts-ignore
  const [urlParam, setUrlsParam] = useState<URLPARAM>({ limit: 10, skip: 0 });
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading } = useSelector((state: any) => {
    return state.productStore;
  });

  useEffect(() => {
    if (!load.current && products.length === 0) {
      dispatch(getAllProduct(urlParam));
    }
    return () => {
      load.current = true;
    };
  }, []);

  const listOfProduct = isLoading ? (
    <Skeleton animation="wave" variant="rectangular" width={300} height={400} />
  ) : (
    products &&
    products.map((value: PRODUCT) => {
      return (
        <Link to={`/products/${value.id}`} key={value.id}>
          <Card key={value.id} product={value} />
        </Link>
      );
    })
  );

  if (isLoading) return null;
  return (
    <>
      <HeroSection />
      <Box className="my-5">
        <Typography className="text-[32px] font-bold py-10 text-center">
          Browse The Range
        </Typography>
        <Typography className="text-[18px] font-medium text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          commodi, dolorum corporis ipsum ipsa vel.
        </Typography>
      </Box>
      <Box className="flex flex-wrap justify-evenly">{listOfProduct}</Box>
      <Box className="flex justify-center my-10 "></Box>
      <SecondHeroSetcion />
    </>
  );
};

export default Home;
