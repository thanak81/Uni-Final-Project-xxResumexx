"use client";
import { forgotPasswordService } from "@/app/services/authenticationService";
import { Input } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function ResetPassword() {
    const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data){
    const submit = await forgotPasswordService(data);
    console.log("gey",process.env.NODE_ENV)

    console.log("submit",submit)
    if(submit.payload.code.error === null){

    }
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-semibold">Please enter your email.</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          radius="sm"
          key="inside"
          labelPlacement="inside"
          type="email"
          id="email"
          placeholder="Email"
          className="text-xl"
          isInvalid={errors.email ? true : false}
          errorMessage={errors.email && errors.email.message}
          {...register("email")}
        />
        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
}

export default ResetPassword;
