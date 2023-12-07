import { Box, Typography, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShopBg from "../assets/headerIcon/SHOPBG.jpg";
import Card from "../component/Card";
import { useProductData } from "../customeHook/useProductData";
import {END_POINT_PRODUCTS} from "../Api/EndPoints"
const Shop = () => {
  const breadcrumbs = [
    <Link key="1" to="/">
      Home
    </Link>,
    <Link key="2" to="/shop">
      Shop
    </Link>,
  ];
  const { products } = useProductData(END_POINT_PRODUCTS);
  return (
    <>
      <Box
        className="w-[100%] h-[450px] bg-cover bg-no-repeat flex flex-col items-center justify-center  "
        sx={{ backgroundImage: `url(${ShopBg})` }}
      >
        <Typography className="font-bold text-[48px] text-[#fff] ">
          Shop
        </Typography>
        <Breadcrumbs
          className="text-[#fff]"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>

      <Box className="flex flex-wrap justify-evenly">
        {products.map((value: any) => {
          return (
            <Link to={`/products/${value.id}`} key={value.id}>
              <Card key={value.id} product={value} />;
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default Shop;
