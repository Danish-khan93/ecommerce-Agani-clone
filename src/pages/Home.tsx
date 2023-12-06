import { Box, Typography, Button } from "@mui/material";
import {
  HeroSection,
  Card,
  SecondHeroSetcion,
  //   GallerySection,
} from "../component";

import axios from "axios";
import { useEffect, useState } from "react";

const Baseurl = "https://dummyjson.com/products";
const Home = () => {
  const [products, setProducts] = useState<any>([]);
  console.log(products);

  const product = async () => {
    try {
      await axios
        .get(`${Baseurl}?limit=8`)
        .then((res) => setProducts(res.data.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
  }, []);

  const handleClick = () => {};

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
      <Box className="flex flex-wrap justify-evenly">
        {products.map((value: any) => {
          return <Card key={value.id} product={value} />;
        })}
      </Box>
      <Box className="flex justify-center my-10 ">
        <Button
          onClick={handleClick}
          className="bg-white text-[#B88E2F] text-[16px] font-bold border-solid border-2 border-[#B88E2F] py-[20px] px-[30px]"
        >
          Show more
        </Button>
      </Box>
      <SecondHeroSetcion />
    </>
  );
};

export default Home;
