import { Input } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function AccountDetails({ profile, update }) {
  return (
    <>
      <div className="text-3xl font-bold">Account Details</div>
      <div className="text-sm">
        Here, you can update your account information such as your profile
        picture, name and username.
      </div>
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        <div className="w-full">
          <Input
            radius="sm"
            key="inside"
            variant="bordered"
            label="Username"
            labelPlacement="outside"
            defaultValue={profile.name}
            // isInvalid= {error ?  true : false}
            //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
            // onValueChange={setValue}
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
      <div className="flex justify-between w-full">
        <Button color="red" className="cursor-pointer">
          <Link href="/api/auth/signout">Log out</Link>
        </Button>
        <Button color="blue" className="cursor-pointer">
          Update Profile
        </Button>
      </div>
    </>
  );
}

export default AccountDetails;
