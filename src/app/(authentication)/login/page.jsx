"use client";
import { signIn } from "next-auth/react";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import OauthComp from "../components/OauthComp";
import { loginZod } from "@/app/zodValidation/zodValidation";
import TextBetweenLine from "../components/TextBetweenLine";
function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginZod),
  });

  async function onSubmit(data) {
    const response = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });

    // console.log(response);

    if (response.status === 200) {
      toast.success("You are logged in!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
      router.push("/");
      router.refresh();
    } else {
      toast.error("Invalid user details. Check your email and password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    }
  }

  return (
    <div className="grid lg:grid-cols-2 h-full w-full">

      <div className="h-full border lg:block hidden bg-[url('/images/login.jpg')] bg-no-repeat bg-cover brightness-50 ">
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="fixed text-2xl font-bold mx-5 mt-5 text-yellow-500">xxResumexx</div>

        <div className="flex h-full gap-10 justify-center items-center ">
          <div className="flex flex-col gap-5 w-[25rem]">
            <div className="self-center text-3xl font-bold text-blue-500">
              Login
            </div>
            <div className="w-full flex flex-col  gap-2">
              <label htmlFor="email">Email</label>

              <Input
                radius="sm"
                key="inside"
                labelPlacement="inside"
                type="email"
                id="email"
                placeholder="Email"
                className="border border-black rounded-xl"
                {...register("email")}
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email && errors.email.message}
              />
            </div>
            <div className="w-full flex flex-col  gap-2">
              <label htmlFor="password">Password</label>
              <Input
                radius="sm"
                key="inside"
                labelPlacement="inside"
                type="password"
                id="password"
                placeholder="Password"
                isInvalid={errors.password ? true : false}
                errorMessage={errors.password && errors.password.message}
                {...register("password")}
                className="border border-black rounded-xl"
              />
            </div>
            <Button
              type="submit"
              loading={isSubmitting}
              // disabled={isSubmitting}
              className={`text-white w-full  cursor-pointer  `}
            >
              Login
            </Button>
            <div className="self-end">
              <Link
                className="text-sm text-red-500"
                href={"/forgot-password/email"}
              >
                Forget Password?
              </Link>
            </div>
            <div className="self-start">
              <div className="flex gap-2">
                Dont have an account?
                <span className="text-blue-500">
                  <Link className="cursor-pointer font-semibold" href="/register">
                    Register
                  </Link>
                </span>
              </div>
            </div>
            <TextBetweenLine>
            Or Continue with
            </TextBetweenLine>
            <OauthComp />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
