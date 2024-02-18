import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FORMTYPELOGIN } from "../component/types/formType";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/cart");
    }
  }, []);
  const { register, handleSubmit } = useForm<FORMTYPELOGIN>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FORMTYPELOGIN) => {
    signInWithEmailAndPassword(auth, data?.email, data?.password)
      .then((response) => {
        navigate("/cart");
        sessionStorage.setItem(
          "Auth Token",
          // @ts-ignore
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        if (error.code === "auth/too-many-requests") {
          toast("invailed email and password");
        }
      });
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
          Login
        </Button>
        <ToastContainer />
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

export default Login;
