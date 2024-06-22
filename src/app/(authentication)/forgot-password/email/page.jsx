"use client";
import BackIcon from "@/app/components/BackIcon";
import { Input } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function ForgotPasswordEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="grid lg:grid-cols-2 h-full w-full">
      <div className="h-full border lg:block hidden bg-[url('/images/login.jpg')] bg-no-repeat bg-cover brightness-50 "></div>
      <div>
        <div className="fixed text-2xl font-bold mx-5 mt-5 text-yellow-500">
          xxResumexx
        </div>
        <div className="flex h-full  gap-10 justify-center items-center w-full">
          <div className="flex flex-col gap-5 w-[25rem] mt-16">
            <div className="flex items-center gap-10">
              <Link href="/login">
                <BackIcon />
              </Link>
              <div className="self-start text-3xl font-bold text-blue-500">
                Forgot Password
              </div>
            </div>
            <div className="self-start text-xl font-bold ">
              Enter Email
            </div>
            <div className="w-full  items-center gap-1.5">
              <Input
                radius="sm"
                key="inside"
                labelPlacement="inside"
                type="email"
                id="email"
                placeholder="Email"
                className="border border-black"
                // {...register("email")}
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email && errors.email.message}
              />
            </div>

            <Button
              type="submit"
              className="text-white cursor-pointer w-full bg-blue-500"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordEmail;
