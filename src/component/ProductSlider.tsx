import { Box, Typography, IconButton } from "@mui/material";
import slide1 from "../assets/headerIcon/slide1.png";
import slide2 from "../assets/headerIcon/slide2.png";
import slide3 from "../assets/headerIcon/slide3.png";
import slide4 from "../assets/headerIcon/slide4.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
const slideArray = [slide1, slide2, slide3, slide4];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  const perSlide = () => {
    console.log("danish --");
    if (current === 0) setCurrent(slideArray.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    console.log("danish ++");

    if (current === slideArray.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <Box className="overflow-hidden relative ">
      <Box
        className={`flex transition ease-out duration-40`}
        sx={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slideArray.map((image, index) => {
          return (
            <Typography
              className="w-[100%] h-[500px] "
              key={index}
              component={"img"}
              src={image}
            ></Typography>
          );
        })}
      </Box>
      <Box className="h-full w-full absolute top-0 flex justify-between items-center">
        <IconButton
          className="h-10 w-10 bg-white hover:bg-white"
          onClick={perSlide}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton
          className="h-10 w-10 bg-white hover:bg-white"
          onClick={nextSlide}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductSlider;
