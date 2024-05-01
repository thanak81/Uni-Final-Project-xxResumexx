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
function LoginPage() {
  const Schema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Please input a valid email",
    }),
    password: z
      .string()
      .min(5, { message: "Password must be atleast 5 characters" }),
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(Schema),
  });

  console.log(errors);

  async function onSubmit(data) {
    const response = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  gap-10 justify-center">
          <div className="flex flex-col gap-5 w-[25rem] mt-16">
            <div className="self-start text-3xl font-bold">Login</div>
            <div className="w-full  items-center gap-1.5">
              <label htmlFor="email">Email</label>

              <Input
                radius="sm"
                key="inside"
                labelPlacement="inside"
                type="email"
                id="email"
                placeholder="Email"
                className="border border-black"
                {...register("email")}
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email && errors.email.message}
              />
            </div>
            <div className="w-full  items-center gap-1.5">
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
                className="border border-black"
              />
            </div>
            <Button
              type="submit"
              className="text-white cursor-pointer w-full bg-blue-500"
            >
              Login
            </Button>
            <div className="self-start">
              <div className="flex gap-2">
                Don't have an account?
                <span className="text-blue-500">
                  <Link className="cursor-pointer" href="/register">
                    Register
                  </Link>
                </span>
              </div>
            </div>
            <div className="text-sm font-bold">
              ------------------------ Or Continue with ----------------------
            </div>
            {/* <OauthComp /> */}
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
