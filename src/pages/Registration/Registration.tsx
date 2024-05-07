import { z } from "zod";
import SecNavbar from "../../components/navbar/SecNavbar";
import { Button } from "../../shadcn/components/ui/button";
import { Input } from "../../shadcn/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import errorExc from "../../assets/error-exclamation.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
type Props = {};
type FormField = {
  name: string;
  email: string;
};

const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
});
export default function Registration({}: Props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormField>({
    resolver: zodResolver(RegisterSchema),
  });
  const onSubmit: SubmitHandler<FormField> = async (_data) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        reset();
        navigate("/submission");
        resolve;
      }, 1000)
    );
  };
  return (
    <div className="flex flex-col gap-10 ">
      <div>
        <SecNavbar />
      </div>
      <div className="w-full items-center flex flex-col gap-10">
        <div className="flex items-center justify-center flex-col  text-center">
          <div className="text-[#2DA950] text-[36px] font-normal font-grace ">
            Registration Form
          </div>
          <div className="text-[44px] font-semibold font-manrope w-[500px] leading-[3.5rem]">
            Start your success Journey here!
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[320px] font-manrope gap-14"
        >
          <div className="flex flex-col gap-4 ">
            <Input
              {...register("name")}
              placeholder="Enter the name"
              className=" h-[50px] p-5"
              autoComplete="off"
            />
            {errors.name && (
              <p className="text-red-500 flex items-center gap-2 text-sm font-bold">
                <object data={errorExc}></object>
                {errors.name.message}
              </p>
            )}
            <Input
              {...register("email")}
              placeholder="Enter the email"
              className="h-[50px] p-5"
              autoComplete="off"
            />
            {errors.email && (
              <p className="text-red-500 flex items-center gap-2 text-sm font-bold">
                <object data={errorExc}></object>
                {errors.email.message}
              </p>
            )}
          </div>
          <Button disabled={isSubmitting} className="h-[50px]">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
