import { Box, Typography, Breadcrumbs} from "@mui/material";
import { Link } from "react-router-dom";
import bgImage from "../assets/headerIcon/contactusbg.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { ContactForm } from "../component";
const Contact = () => {
  // breadcrumd

  const breadcrumbs = [
    <Link key="1" to="/">
      Home
    </Link>,
    <Link key="2" to="/contact">
      Contact
    </Link>,
  ];

  return (
    <>
      <Box
        className="w-[100%] h-[450px] bg-cover bg-no-repeat flex flex-col justify-center items-center"
        sx={{ backgroundImage: `url(${bgImage})` }}
      >
        <Typography className="font-bold text-[48px] text-[#fff] ">
          Contact
        </Typography>
        <Breadcrumbs
          className="text-[#fff]"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box className="flex justify-center items-center">
        <Box className="flex flex-col items-center h-[100px] w-[50%] my-20">
          <Typography className="font-bold text-[36px]">
            Get In Touch With Us
          </Typography>
          <Typography className="text-[#9F9F9F] text-[16px] text-center mt-5">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </Typography>
        </Box>
      </Box>
      {/* form */}

      <Box className="flex justify-around">
        <Box className="flex flex-col gap-3">
          <Box>
            <Typography>
              <LocationOnIcon />
            </Typography>
          </Box>
          <Box>
            <Typography className="font-bold text-[16px]">Address</Typography>
            <Typography className=" text-[16px]">
              236 5th SE Avenue, New York NY10000, United States
            </Typography>
          </Box>
          <Box>
            <Typography>
              <LocalPhoneIcon />
            </Typography>
          </Box>
          <Box>
            <Typography className="font-bold text-[16px]">Phone</Typography>
            <Typography className=" text-[16px]">
              Mobile: +(84) 546-6789 Hotline: +(84) 456-6789{" "}
            </Typography>
          </Box>
          <Box>
            <Typography>
              <AccessTimeIcon />
            </Typography>
          </Box>
          <Box>
            <Typography className="font-bold text-[16px]">
              Working Time
            </Typography>
            <Typography className=" text-[16px]">
              Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
            </Typography>
          </Box>
        </Box>
        <Box>
          <ContactForm />
        </Box>
      </Box>

      {/* form */}
    </>
  );
};

export default Contact;
