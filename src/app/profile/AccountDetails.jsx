"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountDetailService } from "../services/authenticationService";
import { loginZod, updateAccountZod } from "../zodValidation/zodValidation";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

function AccountDetails({ profile }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(updateAccountZod),
  });
  const { data: session, status, update } = useSession();
  async function onSubmit(acc) {
    const response = await accountDetailService(acc);
    if (response.status === 200) {
      toast.success("Account updated sucessfully", {
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
      <div className="text-3xl font-bold">Account Details</div>
      <div className="text-sm">
        Here, you can update your account information such as your profile
        picture, name and username.
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <div className="w-full">
            <Input
              radius="sm"
              key="inside"
              variant="bordered"
              label="Username"
              labelPlacement="outside"
              defaultValue={profile.name}
              {...register("name")}
            />
          </div>
          <div className="w-full">
            <Input
              radius="sm"
              key="inside"
              variant="bordered"
              label="Email"
              labelPlacement="outside"
              defaultValue={profile.email}
              {...register("email")}

              // isInvalid= {error ?  true : false}
              //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
              // onValueChange={setValue}
            />
          </div>
        </div>
        <div className="text-xs">
          <div>
            Account created date: {new Date(profile.createdAt).toUTCString()}
          </div>
          <div className="mt-2">
            Account updated date: {new Date(profile.updatedAt).toUTCString()}
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          <Link
            className="cursor-pointer bg-red-500 px-3 py-1 rounded text-sm font-semibold"
            href="/api/auth/signout"
          >
            Log out
          </Link>
          <Button color="blue" type="submit"  className="cursor-pointer">
            Update Profile
          </Button>
        </div>
      </form>
    </>
  );
}

export default AccountDetails;
