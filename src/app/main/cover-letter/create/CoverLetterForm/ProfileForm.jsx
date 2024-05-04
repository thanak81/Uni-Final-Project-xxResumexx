import React from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Heading, Text } from "@radix-ui/themes";
import { z, ZodType } from "zod"; // Add new import
import { useFormContext } from "react-hook-form";

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
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
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
        <Input
          label="Job Title"
          radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          defaultValue={
            autoSaveData?.data.profile.job
              ? autoSaveData.data.profile.job
              : ""
          }
          {...register("data.profile.job")}
        />
      </div>
      <div className={`flex ${active ? "flex-col" : ""} gap-2 w-full`}>
        <Input
          label="Full name"
          radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          defaultValue={
            autoSaveData?.data.profile.name ? autoSaveData.data.profile.name : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          {...register("data.profile.name")}
        />
        <Input
          label="Email"
          radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          defaultValue={
            autoSaveData?.data.profile.email
              ? autoSaveData.data.profile.email
              : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          {...register("data.profile.email")}
        />
      </div>
      <div className="w-full">
        <Input
          label="Address"
          radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          defaultValue={
            autoSaveData?.data.profile.address
              ? autoSaveData.data.profile.address
              : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          {...register("data.profile.address")}
        />
      </div>
      <div className="w-full">
        <Input
          label="Phone Number"
          radius="sm"
          key="inside"
          variant="bordered"
          labelPlacement="inside"
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          defaultValue={
            autoSaveData?.data.profile.phone
              ? autoSaveData.data.profile.phone
              : ""
          }
          {...register("data.profile.phone")}
        />
      </div>
    </div>
  );
}

export default ProfileForm;
