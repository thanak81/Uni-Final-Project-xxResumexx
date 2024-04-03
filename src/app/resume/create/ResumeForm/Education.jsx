import { Heading, Text } from "@radix-ui/themes";
import React from "react";
import { Accordion, AccordionItem,Input, Textarea } from "@nextui-org/react";

function Education() {
    
  return (
    <div className="px-8 rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
            <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Education
            </Heading>
          }
          subtitle={<small>Education Info Tip</small>}
        >
          <Text className="text-sm">
          Provide much details about yourself as much as possible.
          </Text>
     
        </AccordionItem>
      </Accordion>
      <div className="w-full">
        <div className="flex gap-2">
          <Input
            radius="sm"
            key="inside"
            variant="bordered"
            labelPlacement="inside"
            label="Company"
            placeholder="Company"
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <Input
            radius="sm"
            key="inside"
            variant="bordered"
            labelPlacement="inside"
            label="Position"
            placeholder="Position"
            // value={value}
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
        //   value={value}
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
        //   value={value}
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

export default Education;
