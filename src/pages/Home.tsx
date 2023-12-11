import { Box, Typography, Button } from "@mui/material";
import { HeroSection, Card, SecondHeroSetcion } from "../component";
// import { useProductData } from "../customeHook/useProductData";
// import { END_POINT_PRODUCTS } from "../Api/EndPoints";
import { getAllProduct } from "../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
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

    dispatch(getAllProduct({ limit: 8 }));
  }, []);
// limit for show more 
// const sendLimit = ()=>{
//   const num = 8
   
// }

  const handleClick = () => {
    // abhi hardcoded 16 send kar raha ho 
    // @ts-ignore
    dispatch(getAllProduct({ limit: 16}));

    console.log("incomplet feature for showmore button");
  };
  // const { products } = useProductData(END_POINT_PRODUCTS);

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
      <Box className="flex flex-wrap justify-around">
        {dataFromStore.map((value: any) => {
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
