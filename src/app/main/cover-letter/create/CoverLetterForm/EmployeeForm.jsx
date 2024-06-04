import React from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Heading, Text } from "@radix-ui/themes";
import { z, ZodType } from "zod"; // Add new import
import { useFormContext } from "react-hook-form";
import Tiptap from "../../components/TipTap";
import { Label } from "@radix-ui/themes/dist/cjs/components/context-menu";
import InputComp from "@/app/main/resume/components/InputComp";

export const Schema = z.object({
  employee: z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    number: z
      .string()
      .refine((value) => value !== "", { message: "Phone number is required" }),
    // .refine((value) => phoneNumberRegex.test(value), {
    //   message: "Invalid phone number format.",
    // }),
    address: z
      .string()
      .min(3, { message: "Address must be at least 3 characters long" }),
  }),
});

function EmployeeForm({ active  ,  autoSaveData}) {
  
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Employee Details
            </Heading>
          }
          subtitle={<small>Employee Info Tip</small>}
        >
          <Text className="text-sm">
            Provide much details about yourself as much as posible.
          </Text>
        </AccordionItem>
      </Accordion>

      <div className={`flex ${active ? "flex-col" : ""} gap-2 w-full`}>
        <InputComp
          label="Company Name"

          defaultValue={autoSaveData?.data.employee.company? autoSaveData.data.employee.company : ""}
          name={"data.employee.company"}

        />
        <InputComp
          label="Hiring Manager Name"
          defaultValue={autoSaveData?.data.employee.hiringManager? autoSaveData.data.employee.hiringManager : ""}
          name={"data.employee.hiringManager"}
        />
      </div>
    </div>
  );
}

export default EmployeeForm;
