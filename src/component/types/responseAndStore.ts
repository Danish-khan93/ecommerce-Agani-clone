export type PRODUCTSTORE = {
  products: PRODUCT[] | [];
  isLoading: boolean;
  isError?: any;
};
export type PRODUCT = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type URLPARAM ={
  limit:number,
  skip:number
}

export type PRODUCTQUANTITY = {
  quantity: number;
  product: PRODUCT;
};
