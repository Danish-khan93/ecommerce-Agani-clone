import { Box, Typography, Button } from "@mui/material";
import HeroSectionImage from "../assets/headerIcon/heroSectionImage.png";
import { heroSectionStyle } from "../component/navStyleed";
const HeroSection = () => {
  return (
    <Box
      className={heroSectionStyle.body}
      sx={{ backgroundImage: `url(${HeroSectionImage})` }}
    >
      <Box className="w-[643px] h-[443px] bg-[#FFF3E3] mr-8 max-md:hidden" >
        <Typography className={heroSectionStyle.heading}>
          {" "}
          Discover Our New Collection
        </Typography>
        <Typography className={heroSectionStyle.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </Typography>
        <Button className={heroSectionStyle.button}>Buy Now</Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
