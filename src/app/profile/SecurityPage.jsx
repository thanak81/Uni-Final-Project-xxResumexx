import { Input } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import DeleteAccountButton from "./component/DeleteAccountButton";

function SecurityPage({ profile }) {
  return (
    <>
      <div className="text-3xl font-bold">Security</div>
      <div className="text-sm text-green-500 font-semibold">
        Here, you can update your password information
      </div>
      <div className="w-full">
        <Input
          radius="sm"
          key="inside"
          className="w-full"
          variant="bordered"
          label="Current Password"
          placeholder="Current Password"
          labelPlacement="outside"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-between w-full">
        <div className="w-full">
          <Input
            radius="sm"
            key="inside"
            className="w-full"
            variant="bordered"
            label="New Password"
            placeholder="Password"
            labelPlacement="outside"
          />
        </div>
        <div className="w-full">
          <Input
            radius="sm"
            key="outside"
            variant="bordered"
            label="Confirm Password"
            placeholder="Confirm Password"
            labelPlacement="outside"
          />
        </div>
      </div>
      <div className="self-end">
        <DeleteAccountButton />
      </div>
    </>
  );
}

export default SecurityPage;
