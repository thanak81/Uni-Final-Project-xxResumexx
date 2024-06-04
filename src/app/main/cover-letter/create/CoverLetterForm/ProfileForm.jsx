import React from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Heading, Text } from "@radix-ui/themes";
import { z, ZodType } from "zod"; // Add new import
import { useFormContext } from "react-hook-form";
import InputComp from "@/app/main/resume/components/InputComp";

export const Schema = z.object({
  profile: z.object({
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

function ProfileForm({ active, autoSaveData }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center ">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Personal Data
            </Heading>
          }
          subtitle={<small>Personal Info Tip</small>}
        >
          <Text className="text-sm">
            Provide much details about yourself as much as posible.
          </Text>
        </AccordionItem>
      </Accordion>
      <div className="w-full">
        <InputComp
          label="Job Title"
          // radius="sm"
          // variant="bordered"

          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          defaultValue={
            autoSaveData?.data.profile.job
              ? autoSaveData?.data.profile.job
              : ""
          }
          name={"data.profile.job"}

          // {...register("data.profile.job")}
        />
      </div>
      <div className={`flex ${active ? "flex-col" : ""} gap-2 w-full`}>
        <InputComp
          label="Full name"

          defaultValue={
            autoSaveData?.data.profile.name ? autoSaveData.data.profile.name : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          name={"data.profile.name"}
        />
        <InputComp
          label="Email"
          defaultValue={
            autoSaveData?.data.profile.email
              ? autoSaveData.data.profile.email
              : ""
          }
          name={"data.profile.email"}

        />
      </div>
      <div className="w-full">
        <InputComp
          label="Address"

          defaultValue={
            autoSaveData?.data.profile.address
              ? autoSaveData.data.profile.address
              : ""
          }
          name={"data.profile.address"}

          // {...register("data.profile.job")}
        />
      </div>
      <div className="w-full">
        <InputComp
          label="Phone Number"
          defaultValue={
            autoSaveData?.data.profile.phone
              ? autoSaveData.data.profile.phone
              : ""
          }
          name={"data.profile.phone"}

        />
      </div>
      <div className="w-full">
        <InputComp
          label="Date"
          defaultValue={
            autoSaveData?.data.profile.date
              ? autoSaveData.data.profile.date
              : ""
          }
          name={"data.profile.date"}
        />
      </div>
    </div>
  );
}

export default ProfileForm;
