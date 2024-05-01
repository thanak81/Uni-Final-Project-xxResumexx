import React from "react";
import InputComp from "../../components/InputComp";
import { Accordion, AccordionItem, Input } from "@nextui-org/react";
import { HeadingIcon } from "@radix-ui/react-icons";
import { Heading, Text } from "@radix-ui/themes";
import { useFormContext } from "react-hook-form";

function ResumeHeader() {
    const {register} = useFormContext()
  return (
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Resume Title
            </Heading>
          }
          subtitle={<small>Provide your resume details</small>}
        >
          <div className="flex flex-col gap-5">
          <Input
              placeholder="Title"
              radius="sm"
              key="outside"
              variant="bordered"
              labelPlacement="outside"
              className="bg-none border-none"
              defaultValue="Resume 1"
              label="Resume Title"
              {...register("resumeInfo.title")}
            />
            <Input
              placeholder="Description"
              radius="sm"
              key="outside"
              variant="bordered"
              labelPlacement="outside"
              className="bg-none border-none"
              defaultValue="For professional purpose"
              label="Resume Description"
              {...register("resumeInfo.slug")}
            />
    
          </div>
        </AccordionItem>
      </Accordion>
    
    </div>
  );
}

export default ResumeHeader;
