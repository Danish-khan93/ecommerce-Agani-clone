import axios from "axios";
import { useEffect, useState } from "react";


export const useProductData =()=>{
    const Baseurl = "https://dummyjson.com/products";


  const [products, setProducts] = useState<any>([]);

  const product = async () => {
    try {
      await axios
        .get(`${Baseurl}?limit=8`)
        .then((res) => setProducts(res.data.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
  }, []);

  return {products}
}