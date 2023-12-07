import axios from "axios";
import { useEffect, useState } from "react";
// import { END_POINT_PRODUCTS } from "../Api/EndPoints";
export const useProductData = (END_POINT_PRODUCTS: String) => {
  //   const Baseurl = "https://dummyjson.com/products?limit=8";

  const [products, setProducts] = useState<any>([]);

  const product = async () => {
    try {
      await axios
        .get(`${END_POINT_PRODUCTS}`)
        .then((res) => setProducts(res.data.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
  }, []);

  return { products };
};
