import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { catagoryFilter } from "../redux/features/product/productSlice";
const SelectBox = () => {
  const [items, setItems] = useState<String[] | []>([]);
  const [selecteditems, setSelectedItems] = useState<string>("");

  console.log(selecteditems);
  console.log(items);

//   const dispatch = useDispatch();

  const response = async () => {
    try {
      await axios
        .get("https://dummyjson.com/products/categories")
        .then((res) => {
          setItems(res?.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    response();

    // @ts-ignore
    // dispatch(catagoryFilter(selecteditems));
  }, [selecteditems]);

  const changeHandle = (e: SelectChangeEvent) => {
    setSelectedItems(e?.target?.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Catagory filter</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selecteditems}
        onChange={changeHandle}
        label="Catagory Filter"
        className="w-[250px] text-[#000] bg-[#fff] "
      >
        <MenuItem className="bg-red-500" value="" disabled>
          Catagory Filter
        </MenuItem>
        {items.map((value: any | string, index) => {
          return (
            <MenuItem value={value} key={index}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
