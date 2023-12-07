import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  type FORMTYPE = {
    name: String;
    email: String;
    subject: String;
    message: String;
  };

  const { register, handleSubmit } = useForm<FORMTYPE>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data, "data from form");
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10"
    >
      <TextField
        className="border-black focus:border-black b"
        size="small"
        placeholder="enter your name"
        {...register("email", { required: true })}
      />
      <TextField
        size="small"
        placeholder="enter your email"
        {...register("subject", { required: true })}
      />
      <TextField
        size="small"
        placeholder="subject"
        {...register("name", { required: true })}
      />
      <Button
        type="submit"
        className="bg-[#B88E2F] text-[#FFF] hover:bg-[#B88E2F] "
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
