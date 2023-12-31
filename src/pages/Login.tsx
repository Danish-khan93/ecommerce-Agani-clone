import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FORMTYPELOGIN } from "../component/types/formType";


const SignUp = () => {
  const { register, handleSubmit } = useForm<FORMTYPELOGIN>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FORMTYPELOGIN) => {
    console.log(data);
  };

  return (
    <Box className="flex flex-col items-center gap-10 justify-center my-10">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 w-[20%]"
      >
        <TextField
          label="Email"
          size="small"
          placeholder="Enter Email"
          {...register("email")}
        />
        <TextField
          label="Password"
          size="small"
          placeholder="Enter Password"
          {...register("password")}
        />
        <Button
          className="bg-[#B88E2F] text-[#FFF] hover:bg-[#B88E2F] "
          type="submit"
        >
          Signup
        </Button>
      </form>
      <Typography className="text-[#9F9F9F] text-[16px]">
        If You are already sign up ?{" "}
        <Link className="text-[#000] text-[16px]" to={"/signup"}>
          SignUp
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
