import React, { useState } from "react";
import { Input ,Textarea} from "@nextui-org/react";
import { Box, Flex, Heading, Text} from "@radix-ui/themes";
function Personal({value,setValue}) {
  console.log(value)
  return (
    <div className="py-5 px-8 rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl border">
      <Heading className="self-start" as="h3">
        Personal Data
      </Heading>
      <div className="w-full">
        <div className="flex gap-2">
          <Input
          radius="sm"
          className="rounded"
            key="inside"
            variant="bordered"
            labelPlacement="inside"
            label="Full Name"
            placeholder="Enter your Full Name"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
          />
          <Input
                    radius="sm"
            key="inside"
            variant="bordered"
            labelPlacement="inside"
            label="Email"
            placeholder="Enter your email"
            value={value}
            // onValueChange={setValue}
          />
        </div>
      </div>
      <div className="w-full">
        <Input
                  radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          label="Address"
          placeholder="Enter your address"
          value={value}
          // onValueChange={setValue}
        />
      </div>
      <div className="w-full">
        <Input
                  radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          label="Phone Number"
          placeholder="Enter your phone number"
          value={value}
          // onValueChange={setValue}
        />
      </div>
      <div className="w-full">
        <Textarea
         variant="bordered"
          label="Description"
          placeholder="Enter your description"
        />
      </div>
    </div>
  );
}

export default Personal;
