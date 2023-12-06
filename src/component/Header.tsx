import { AppBar, Toolbar, Box, Typography,IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { navStyle } from "./navStyleed";
import { navLink, navlink2 } from "./constant/headerconstant";
import { NAVLINKTYPO, NAVLINKTYPO2 } from "./types/navTypes";
import logo from "../assets/headerIcon/Meubel House_Logos-05.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar className="bg-[#fff]  " position="static">
      <Toolbar className="flex justify-around">
        <Box className="flex items-center gap-2">
          <Typography component={"img"} src={logo}></Typography>
          <Typography className="text-black text-[34px] font-bold">
            Ecommerce
          </Typography>
        </Box>
        <Box className="flex items-center gap-8 max-sm:hidden">
          {navLink.map((links: NAVLINKTYPO) => {
            return (
              <Link to={`${links.link}`} key={links?.link}>
                <Typography className={navStyle.text}>
                  {links?.title}
                </Typography>
              </Link>
            );
          })}
        </Box>
        <Box className="flex items-center gap-6 max-md:hidden">
          {navlink2.map((links: NAVLINKTYPO2, index: Number) => {
            return (
              <Link to={`${links.link}`} key={index.toString()}>
                <div className={navStyle.text}>
                  <links.icon />
                </div>
              </Link>
            );
          })}
        </Box>
        <Box className="2xl:hidden xl:hidden lg:hidden md:hidden    ">
            <IconButton><MenuIcon/></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
