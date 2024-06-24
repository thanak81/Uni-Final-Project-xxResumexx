"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function OauthComp() {
  const session = useSession();
  // console.log(session)
  const router = useRouter();
  // useEffect(() => {
  //   if (session) {
  //     router.push("/");
  //     router.refresh();
  //   }
  // }, []);

  return (
    <div
      onClick={() => signIn("google")}
      className="border h-[3rem] rounded-3xl bg-white text-black flex items-center cursor-pointer"
    >
      <Image
        src="/shop(11).png"
        height={70}
        width={70}
        alt="google_logo"
        className="mt-2"
      />
      <div className="font-bold bg-blue-500 w-full h-full rounded-3xl text-center text-white flex justify-center items-center">
        Sign In with Google
      </div>
    </div>
  );
}

export default OauthComp;
