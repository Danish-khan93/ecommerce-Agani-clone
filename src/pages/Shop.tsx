import { useSelector } from "react-redux";

const Shop = () => {
  useSelector((state) => {
    console.log(state.products);
  });
  return <div>Shop</div>;
};

export default Shop;
