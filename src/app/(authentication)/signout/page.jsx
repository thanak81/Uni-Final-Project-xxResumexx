"use client";
import { Button } from "@radix-ui/themes";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

function SignOutPage() {
  const route = useRouter();
  let data;
  async function signOutFunc() {
    data = await signOut({ redirect: false, callbackUrl: "/login" });
    toast.success("You are logged out!", {
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
    route.push(data.url);
  }
  return (
    <div className="h-full w-full grid md:grid-cols-2">
           <div className="hidden md:block bg-[url('/images/ocean.jpg')] bg-no-repeat bg-cover bg-opacity-5 brightness-75">
           </div>
      <div className="flex items-center flex-col gap-10 justify-center px-10 col-span-1 ">
        <div className="text-3xl font-bold text-center  w-[full] ">
          Are you sure you want to log out?
        </div>
        <div className="flex  gap-4 ">
          <Link
            href={"/"}
            color="gray"
            className={
              "cursor-pointer w-[10rem] bg-gray-500 rounded text-center text-sm flex items-center font-semibold justify-center "
            }
          >
            Cancel
          </Link>
          <Button
            disabled={data}
            className={`${data ? "bg-slate:400" : ""} cursor-pointer w-[10rem]`}
            onClick={signOutFunc}
          >
            Yes
          </Button>
        </div>
      </div>
   
    </div>
  );
}

export default SignOutPage;
