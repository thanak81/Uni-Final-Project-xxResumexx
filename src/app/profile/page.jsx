import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import AccountDetails from "./AccountDetails";
import SecurityPage from "./SecurityPage";

async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const profile = session.user.payload;
  return (
    <div className="flex w-unit-7xl lg:w-unit-9xl px-10 py-10 mx-auto items-start flex-col mt-20 pt-10 gap-5 ">
      <AccountDetails profile={profile}/>
      <SecurityPage profile={profile}/>
    </div>
    
  );
}

export default ProfilePage;
