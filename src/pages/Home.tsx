import { Box, Typography, Skeleton } from "@mui/material";
import { HeroSection, Card, SecondHeroSetcion } from "../component";
import { getAllProduct } from "../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {
  // @ts-ignore
  const [urlParam, setUrlsParam] = useState({ limit: 10, skip: 0 });
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state: any) => {
    return state.productStore.products;
  });
  const dataFromStoreLoading = useSelector((state: any) => {
    return state.productStore.isLoading;
  });
  console.log(dataFromStore);

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllProduct(urlParam));
  }, []);

  const listOfProduct = dataFromStoreLoading ? (
    <Skeleton animation="wave" variant="rectangular" width={300} height={400} />
  ) : (
    dataFromStore &&
    dataFromStore.map((value: any) => {
      return <Card key={value.id} product={value} />;
    })
  );

  if (dataFromStoreLoading) return null;
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
