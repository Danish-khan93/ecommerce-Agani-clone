import { Box, Typography, Breadcrumbs, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShopBg from "../assets/headerIcon/SHOPBG.jpg";
import Card from "../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProduct } from "../redux/features/product/productSlice";
import { SelectBox } from "../component";
const Shop = () => {
  const breadcrumbs = [
    <Link key="1" to="/">
      Home
    </Link>,
    <Link key="2" to="/shop">
      Shop
    </Link>,
  ];
  // const [page,setPage] = useState(1)
  //   const [limit, setLimit] = useState(10);
  //   const [skip, setSkip] = useState(0);

  const products = useSelector(
    (state: any) => state.productStore.products.products
  );
  const loading = useSelector((state: any) => state.productStore.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getAllProduct({ limit: 8, skip: 0 }));
  },[]);

  const handleChange = () => {
    // setPage(p)
  };

if(loading) return null

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
      <Box className="bg-[#F9F1E7] h-20 flex items-center pl-5">
        <SelectBox />
      </Box>
      <Box className="flex flex-wrap justify-evenly">
        { products.map((value: any) => {
              return (
                <Link to={`/products/${value.id}`} key={value.id}>
                  <Card key={value.id} product={value} />
                </Link>
              );
            })}
      </Box>
      <Pagination count={10} onChange={handleChange} />
    </>
  );
};

export default Shop;
