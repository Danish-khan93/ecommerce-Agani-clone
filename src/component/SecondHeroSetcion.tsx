import { Box, Typography, Button } from "@mui/material";
import secondHero from "../assets/headerIcon/secondhero.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ProductSlider } from ".";
const SecondHeroSetcion = () => {
  return (
    <Box className="bg-[#FCF8F3] flex justify-evenly items-center gap-4 max-md:flex-col">
      {/* section 2 first */}
      <Box className="flex flex-col w-[(100/3)%] gap-4 p-10">
        <Box>
          <Typography className="font-bold text-[40px] text-[#3A3A3A]">
            50+ Beautiful and inspiration Design
          </Typography>
        </Box>
        <Box>
          <Typography className="font-medium text-[16px] text-[#3A3A3A]">
            Our designer already made a lot of beautiful looks that inspire you
          </Typography>
        </Box>
        <Box>
          <Button className="text-white bg-[#B88E2F] font-bold rounded-none py-[20px] px-[35px]">
            Explore more
          </Button>
        </Box>
      </Box>
      {/* section 2 first */}
      {/* section 2 second */}
      <Box className="my-10">
        <Box
          className="w-[404px] h-[582px] bg-no-repeat bg-cover flex justify-start items-end pb-5 pl-5"
          sx={{ backgroundImage: `url(${secondHero})` }}
        >
          <Box className="bg-white opacity-75 w-[200px] h-[200px] flex justify-center items-center">
            <Typography className="text-[#3A3A3A] font-bold text-[24px]">
              more afforedable
            </Typography>
          </Box>
          <Box>
            <Button
              className="text-white bg-[#B88E2F] font-bold rounded-none py-[20px] px-[25px]"
              endIcon={<ArrowForwardIcon />}
            ></Button>
          </Box>
        </Box>
      </Box>

      {/* section 2 second */}
      {/* section 2 third */}
      <Box className="w-[20%] m-auto max-md:w-[100%]">
        <ProductSlider />
      </Box>
      {/* section 2 third */}
    </Box>
  );
};

export default SecondHeroSetcion;
