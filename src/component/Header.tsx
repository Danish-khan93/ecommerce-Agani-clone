import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navStyle } from "./navStyleed";
import { navLink } from "./constant/headerconstant";
import { NAVLINKTYPO } from "./types/navTypes";
import logo from "../assets/headerIcon/Meubel House_Logos-05.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { logout } from "../redux/features/auth/authSLice";
const Header = () => {
  const dispatch =useDispatch<AppDispatch>()
  const handleLogOut=()=>{
dispatch(logout())
  }
  const token = localStorage.getItem("userToken");
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
              <Link to={`${links.link}`} key={links?.link.toString()}>
                <Typography className={navStyle.text}>
                  {links?.title}
                </Typography>
              </Link>
            );
          })}
        </Box>
        <Box className="flex items-center gap-6 max-md:hidden">
          {token ? (
            <Button onClick={handleLogOut}>logout</Button>
          ) : (
            <Link to={`${"signup"}`}>
              <div className={navStyle.text}>
                <AccountCircleIcon />
              </div>
            </Link>
          )}
          <Link to={`${"search"}`}>
            <div className={navStyle.text}>
              <SearchIcon />
            </div>
          </Link>
          <Link to={`${"cart"}`}>
            <div className={navStyle.text}>
              <ShoppingCartIcon />
            </div>
          </Link>
        </Box>

        <Box className="2xl:hidden xl:hidden lg:hidden md:hidden    ">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
