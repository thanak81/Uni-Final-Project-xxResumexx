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
    <div className="flex  gap-10 justify-center w-full">
      <div className="flex flex-col gap-5 w-[25rem] mt-16">
        <div className="flex items-center gap-10">
          <Link href="/login">
            <BackIcon />
          </Link>
          <div className="self-start text-3xl font-bold ">Forgot Password</div>
        </div>
        <div className="self-start text-xl font-bold text-yellow-500">Enter Email</div>
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
  );
}

export default ForgotPasswordEmail;
