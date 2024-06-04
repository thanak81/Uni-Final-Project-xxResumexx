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
              <div key={field.id} className="flex justify-between w-full">
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
        <InputComp
          label="Full name"
          // radius="sm"
          // variant="bordered"
          defaultValue={
            autoSaveData?.data.basics.name ? autoSaveData.data.basics.name : ""
          }
          name={"data.basics.name"}
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          // {...register("data.basics.name")}
        />
        <InputComp
          label="Email"
          // radius="sm"
          // variant="bordered"
          defaultValue={
            autoSaveData?.data.basics.email
              ? autoSaveData.data.basics.email
              : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          name={"data.basics.email"}

          // {...register("data.basics.email")}
        />
      </div>
      <div className="w-full">
        <InputComp
          label="Address"
          // radius="sm"
          // variant="bordered"
          defaultValue={
            autoSaveData?.data.basics.address
              ? autoSaveData.data.basics.address
              : ""
          }
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          name={"data.basics.address"}
        />
      </div>
      <div className="w-full">
        <InputComp
          label="Phone Number"
          // radius="sm"
          // variant="bordered"
          // isInvalid= {error ?  true : false}
          //   errorMessage={Object.keys(errors).length ===0 ?"" : error }
          defaultValue={
            autoSaveData?.data.basics.phone
              ? autoSaveData.data.basics.phone
              : ""
          }
          name={"data.basics.phone"}

          // {...register("data.basics.phone")}
        />
      </div>
      <div className="w-full">
        <Textarea
          className=""
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
