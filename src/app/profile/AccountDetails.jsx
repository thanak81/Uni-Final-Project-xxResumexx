"use client";
import { Input } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountDetailService } from "../services/authenticationService";
import { loginZod, updateAccountZod } from "../zodValidation/zodValidation";
import { toast } from "react-toastify";
import Image from "next/image";
import { useSession } from "next-auth/react";

function AccountDetails({ profile, session }) {
  const { data, update } = useSession();
  console.log("data", data);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(updateAccountZod),
  });
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
  // console.log(session);
  async function updateSession() {
    await update();
    console.log("i update myself")
  }
  return (
    <>
      <div className="text-3xl font-bold ">Account Details</div>
      {session.provider === "google" ? (
        <>
          <div className="text-sm text-green-500 font-semibold.">
            You are logged in with OAuth Provider.
          </div>
          <div>
            If you wish to change your personal data. Please change it on your
            google account
          </div>
        </>
      ) : (
        <div className="text-sm font-semibold text-green-500">
          Here, you can update your account information such as your profile
          picture, name and username.
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
          {profile.image && (
            <div className="lg:w-[15rem] w-[10rem]">
              <Image
                alt="Profile Image"
                className="rounded-full"
                src={profile.image}
                width={100000}
                height={100000}
              />
            </div>
          )}

          <div className="w-full">
            <Input
              radius="sm"
              key="inside"
              variant="bordered"
              label="Username"
              labelPlacement="outside"
              disabled={session.provider === "google" ? true : false}
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
              disabled={session.provider === "google"}
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
          {session.provider !== "google" && (
            <Button color="blue" onClick={updateSession} type="submit" className="cursor-pointer">
              Update Profile
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default AccountDetails;
