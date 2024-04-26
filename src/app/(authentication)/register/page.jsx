"use client";
import { signIn } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import InputComp from "@/app/resume/components/InputComp";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
// import { Input } from "@nextui-org/react";

function RegisterPage() {
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  async function onSubmit(credentials) {

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.status === 200) {
        router.push("/login");
        router.refresh();
    // if (!data.token) {
    //   return;
    // } else {
    //   return data;
    // }

   
      //   toast({
      //     className: "bg-green-500 font-bold text-white text-2xl",
      //     description: "Login Success!",
      //     description: "Welcome to TO-DO Lists",
      //   });
      // } else {
      //   toast({
      //     variant: "destructive",
      //     title: "Uh oh! Wrong credential",
      //     description: "Please make sure you type in correct email or password",
      //   });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  gap-10 justify-center">
          <div className="flex flex-col gap-5 w-[25rem] mt-16">
            <div className="self-start text-3xl font-bold">Register</div>

            <div className="w-full  items-center gap-1.5">
              <label htmlFor="name">Name</label>

              <Input
                radius="sm"
                key="inside"
                labelPlacement="inside"
                type="text"
                id="name"
                placeholder="Name"
                className="border border-black"
                {...register("name")}
              />
            </div>

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
                className="border border-black"
                {...register("password")}
              />
            </div>

            <Button type="submit" className="text-white w-full bg-blue-500">
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
            <div className="text-sm">
              ---------------- Continue with -------------
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;
