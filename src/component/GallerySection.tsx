import Box from "@mui/material/Box";

export default function MasonryImageList() {
  return (
    <Box className="flex flex-wrap justify-around" sx={{ width: "100%", height: 450 }}>
      {itemData.map((item) => (
        <Box>
          <img
            srcSet={`${item.img}`}
            width={item.width}
            height={item.height}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </Box>
      ))}
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    width: "100px",
    height: "400px",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    width: "300px",
    height: "400px",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    width: "480px",
    height: "400px",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    width: "530px",
    height: "400px",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    width: "380px",
    height: "400px",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    width: "470px",
    height: "400px",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    width: "490px",
    height: "400px",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    width: "100px",
    height: "400px",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    width: "100px",
    height: "400px",
  },
];
