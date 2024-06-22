import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import AccountDetails from "./AccountDetails";
import SecurityPage from "./SecurityPage";
import Image from "next/image";
import NavBar from "../components/NavBar";
import BackIcon from "../components/BackIcon";

async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const profile = session.user.payload ? session.user.payload : session.user;
  return (
    <>
      <div className="grid lg:grid-cols-2 h-full ">
        <div className="h-full border lg:block hidden bg-[url('/images/profile.jpg')] bg-no-repeat bg-cover brightness-50 ">
          {/* <Image
          src={"/images/profile.jpg"}
          className="h-full"
          width={10000}
          height={10000}
          alt="Profile Image"
        /> */}
          <div class="bg-black bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-1000"></div>
        </div>
        <div className="flex h-full px-10 w-full py-10  col-span-1 overflow-y-auto items-start  flex-col gap-5 ">
          <div className="w-full flex gap-10 items-center ">
            <Link href={"/"}>
              <BackIcon />
            </Link>
            <div className="text-xl font-semibold text-yellow-500">Back</div>
          </div>
          <AccountDetails profile={profile} session={session} />

          {session.provider !== "google" && <SecurityPage profile={profile} />}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
