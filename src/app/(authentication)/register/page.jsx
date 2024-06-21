"use client";
import { signIn } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { registerZod } from "@/app/zodValidation/zodValidation";
import OauthComp from "../components/OauthComp";
// import { Input } from "@nextui-org/react";

function RegisterPage() {
  

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerZod),
  });
  console.log(errors);

  async function onSubmit(credentials) {
    const response = await fetch(`/api/register`, {
      method: "POST",
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        // confirm_password: credentials.confirm_password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("register data", data);

    switch (data.message) {
      case "User already exist":
        toast.error("User already exist", {
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
        break;
      case "User successfully register":
        toast.success("Register successfully", {
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
        router.push("/login");
        router.refresh();
        break;
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  gap-10 justify-center">
          <div className="flex flex-col gap-5 w-[25rem] mt-16">
            <div className="self-start text-3xl font-bold">Register</div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <Input
                radius="sm"
                key="inside"
                labelPlacement="inside"
                type="text"
                id="name"
                placeholder="Name"
                className=""
                isInvalid={errors.name ? true : false}
                errorMessage={errors.name && errors.name.message}
                {...register("name")}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email">Email</label>

              <Input
                radius="sm"
                key="inside"
                labelPlacement="inside"
                type="email"
                id="email"
                placeholder="Email"
                className=""
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email && errors.email.message}
                {...register("email")}
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
                className=""
                color="white"
                isInvalid={errors.password ? true : false}
                errorMessage={errors.password && errors.password.message}
                {...register("password")}
              />
            </div>

            <div className="w-full flex flex-col  gap-2">
              <label htmlFor="password">Confirm Password</label>
              <Input
                radius="sm"
                key="inside"
                labelPlacement="inside"
                type="password"
                id="password"
                placeholder="Confirm Password"
                className=""
                color="white"
                isInvalid={errors.confirm_password ? true : false}
                errorMessage={
                  errors.confirm_password && errors.confirm_password.message
                }
                {...register("confirm_password")}
              />
            </div>

            <Button
              type="submit"
              className="text-white w-full  cursor-pointer bg-blue-500"
            >
              Sign up
            </Button>

            <div className="self-start">
              <div className="flex gap-2">
                Already have an account?
                <span className="text-blue-500">
                  <Link href="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <OauthComp/> */}
    </>
  );
}

export default RegisterPage;
