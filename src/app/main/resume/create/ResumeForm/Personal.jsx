import React, { Fragment, useState } from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Button, Heading, Text } from "@radix-ui/themes";
import { useStore } from "../../state/GlobalState";
import InputComp from "../../components/InputComp";
import { z, ZodType } from "zod"; // Add new import
import { useFieldArray, useFormContext } from "react-hook-form";
import ImageUpload from "@/app/upload/page";
import RemoveIcon from "@/app/components/icons/RemoveIcon";

export const Schema = z.object({
  basics: z.object({
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

function PersonalForm({ active, autoSaveData, selectedTemplate }) {
  const {
    register,
    setValue,
    control,
    resetField,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "data.basics.img",
  });

  const [storeImg, setStoreImg] = useState(false);

  function handleAdd(e) {
    e.preventDefault();
    setStoreImg(true);
    append();
  }

  function handleRemove(index) {
    setStoreImg(false);
    remove(index);
  }

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
      {selectedTemplate.uploadImg && (
        <div className="w-full">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex justify-between">
                <ImageUpload
                  setValue={setValue}
                  value={`data.basics.img.${index}`}
                />
                <Button
                  className="p-5 cursor-pointer"
                  color="red"
                  title="Remove"
                  onClick={() => handleRemove(index)}
                >
                  <RemoveIcon />
                </Button>
              </div>
            );
          })}
          {storeImg !== true && (
            <div className="flex justify-center">
              <Button onClick={handleAdd} type="button">
                Add image
              </Button>
            </div>
          )}
        </div>
      )}
      <div className={`flex ${active ? "flex-col" : ""} gap-2 w-full`}>
        <Input
          label="Full name"
          // radius="sm"
          key="inside"
          // variant="bordered"
          className="border-2 border-blue-500 rounded-xl"
          labelPlacement="inside"
          defaultValue={
            autoSaveData?.data.basics.name ? autoSaveData.data.basics.name : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          {...register("data.basics.name")}
        />
        <Input
          label="Email"
          // radius="sm"
          key="inside"
          className="border-2 border-blue-500 rounded-xl"
          // variant="bordered"
          labelPlacement="inside"
          defaultValue={
            autoSaveData?.data.basics.email
              ? autoSaveData.data.basics.email
              : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          {...register("data.basics.email")}
        />
      </div>
      <div className="w-full">
        <Input
          label="Address"
          // radius="sm"
          key="inside"
          className="border-2 border-blue-500 rounded-xl"
          // variant="bordered"
          labelPlacement="inside"
          defaultValue={
            autoSaveData?.data.basics.address
              ? autoSaveData.data.basics.address
              : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          {...register("data.basics.address")}
        />
      </div>
      <div className="w-full">
        <Input
          label="Phone Number"
          // radius="sm"
          key="inside"
          // variant="bordered"
          labelPlacement="inside"
          className="border-2 border-blue-500 rounded-xl"
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          defaultValue={
            autoSaveData?.data.basics.phone
              ? autoSaveData.data.basics.phone
              : ""
          }
          {...register("data.basics.phone")}
        />
      </div>
      <div className="w-full">
        <Textarea
          className="border-2 border-blue-500 rounded-xl"
          // variant="bordered"
          label="Description"
          defaultValue={
            autoSaveData?.data.basics.summary
              ? autoSaveData.data.basics.summary
              : ""
          }
          {...register("data.basics.summary")}
        />
      </div>
    </div>
  );
}

export default PersonalForm;
