import { Paper, Typography, Box, Button } from "@mui/material";
import { cardStyle } from "./navStyleed";
const Card = ({ product }: any) => {
  const { description, thumbnail, title, price } = product;

  const descriptionUpdated = description.slice(0, 40) + "...";
  // min-[768px]:w-[300px]
  return (
    <Paper className="flex flex-col p-5 my-5 w-[300px] ">
      <Box className={"h-[250px] my-4"}>
        <Typography
          className={cardStyle.image}
          component={"img"}
          src={thumbnail}
        ></Typography>
      </Box>
      <Box className={"h-[40px] my-4"}>
        <Typography className={cardStyle.title}>{title}</Typography>
      </Box>
      <Box className={"h-[40px] my-4"}>
        <Typography className={cardStyle.description}>
          {descriptionUpdated}
        </Typography>
      </Box>
      <Box className={"h-[40px] my-4 flex justify-between items-center"}>
        <Typography className={cardStyle.price}>price ${price}</Typography>
        <Button className="bg-white text-[#B88E2F] text-[12px] font-bold border-solid border-2 border-[#B88E2F]">
          Add to Cart{" "}
        </Button>
      </Box>
    </Paper>
  );
};

export default Card;
