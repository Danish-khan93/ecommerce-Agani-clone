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
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { PRODUCTQUANTITY } from "./types/responseAndStore";

const Header = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
    console.log("logout");
  };
  // @ts-ignore
  // const { success } = useSelector<RootState | any>((state) => state.auth);

  const quantity: PRODUCTQUANTITY[] | any = useSelector(
    (state: RootState) => state?.cart?.productInCart
  );
  console.log(quantity);

  const getTotalQuantity = () => {
    let total = 0;
    quantity.forEach((qty: PRODUCTQUANTITY) => (total += qty.quantity));
    return total;
  };

  return (
    <AppBar className="bg-[#fff]" position="static">
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
          {sessionStorage.getItem("Auth Token") ? (
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
              <span className="w-[10px] h-[10px] text-[12px] p-1 bg-[#B88E2F] rounded-full relative bottom-4 left-8">
                {getTotalQuantity() || 0}
              </span>
              <ShoppingCartIcon />
            </div>
          </Link>
        </Box>

        <Box className="2xl:hidden xl:hidden lg:hidden md:hidden">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
