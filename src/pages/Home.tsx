import { Box, Typography, Button } from "@mui/material";
import { HeroSection, Card, SecondHeroSetcion } from "../component";
import { getAllProduct } from "../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {
  const [limit, setLimit] = useState(10);
  
  console.log(limit);

  const dispatch = useDispatch();
  const dataFromStore = useSelector((state: any) => {
    return state.productStore.products.products;
  });
  const dataFromStoreLoading = useSelector((state: any) => {
    return state.productStore.isLoading;
  });
  console.log(dataFromStore);

  useEffect(() => {
    // @ts-ignore

    dispatch(getAllProduct({ limit: limit }));
  }, []);

  const handleClick = () => {
    setLimit(limit + 10);
    // @ts-ignore
    dispatch(getAllProduct({ limit: limit }));

    console.log("incomplet feature for showmore button");
  };

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
      <Box className="flex flex-wrap justify-evenly">
        {dataFromStore.map((value: any) => {
          return <Card key={value.id} product={value} />;
        })}
      </Box>
      <Box className="flex justify-center my-10 ">
        {limit === 100 ? null : (
          <Button
            onClick={handleClick}
            className="bg-white text-[#B88E2F] text-[16px] font-bold border-solid border-2 border-[#B88E2F] py-[20px] px-[30px]"
          >
            Show more
          </Button>
        )}
      </Box>
      <SecondHeroSetcion />
    </>
  );
};

export default Home;
