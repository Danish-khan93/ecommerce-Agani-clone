import { Box, Typography, TextField,Button } from "@mui/material";
import { footerStyle } from "./navStyleed";

const Footer = () => {
  return (
    <Box className="flex justify-evenly my-10 py-10 border">
      <Box>
        <Typography className="text-[#333] text-[24px] font-bold">
          Funiro.
        </Typography>
        <Typography className="text-[#9F9F9F] text-[16px] font-normal">
          {`400 University Drive Suite 200 Coral
           Gables,
            FL 33134 USA`}
        </Typography>
      </Box>
      <Box className="flex flex-col gap-8">
        <Typography className={footerStyle.heading}>Links</Typography>
        <Typography className={footerStyle.links}>Home</Typography>
        <Typography className={footerStyle.links}>Shop</Typography>
        <Typography className={footerStyle.links}>About</Typography>
        <Typography className={footerStyle.links}>Contact</Typography>
      </Box>
      <Box className="flex flex-col gap-8">
        <Typography className={footerStyle.heading}>Help</Typography>
        <Typography className={footerStyle.links}>Payment Options</Typography>
        <Typography className={footerStyle.links}>Returns</Typography>
        <Typography className={footerStyle.links}>Privacy policies</Typography>
      </Box>
      <Box className="flex flex-col gap-8">
        <Typography className={footerStyle.heading}>News Letter</Typography>
        <Box>
          <TextField
            placeholder="Enter your email"
            size="small"
            variant="standard"
          />
<Button className="text-black font-bold text-[16px]">SUBSCRIBE</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
