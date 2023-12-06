import { Paper, Typography, Box } from "@mui/material";
import { cardStyle } from "./navStyleed";
const Card = ({ product }: any) => {
  const { description, images, title, price } = product;

  const descriptionUpdated = description.slice(0, 40) + "...";

  return (
    <Paper className="flex flex-col w-[380px] p-5 my-5">
      <Box className={"h-[250px] my-4"}>
        <Typography
          className={cardStyle.image}
          component={"img"}
          src={images[0]}
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
      <Box className={"h-[40px] my-4"}>
        <Typography className={cardStyle.price}>price ${price}</Typography>
      </Box>
    </Paper>
  );
};

export default Card;
