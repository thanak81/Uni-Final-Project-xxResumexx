import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { Button, Heading, Text } from "@radix-ui/themes";
// import { useStore } from "../../state/GlobalState";
// import InputComp from "../../components/InputComp";
import InputComp from "../../../components/InputComp";
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

function PersonalForm({ active, data, selectedTemplate }) {
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: "data.basics.img",
  });
  console.log("fields", fields);
  const [storeImg, setStoreImg] = useState(data.payload.data.basics.img);

  function handleAdd(e) {
    e.preventDefault();
    setStoreImg(true);
    append();
  }
console.log("field", data.payload.data.basics)

  function handleRemove(index) {
    setStoreImg(false);
    remove(index);
  }
  return (
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center">
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
                <ImageUpload setValue={setValue} value={`data.basics.img.${index}`} />
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
               {fields.length === 0 && (
            <div className="flex justify-center">
              <Button onClick={handleAdd} type="button">
                {fields.length === 1 ? "Change Image" : "Add Image"}
              </Button>
            </div>
          )}
        </div>
      )}
      <div className={`flex ${active ? "flex-col" : ""} gap-2 w-full`}>
        <InputComp
          // value={name}
          // onValueChange={setName}
          label={"Full name"}
          name={"data.basics.name"}
          defaultValue={data.payload.data.basics.name}
          // error={errors?.basics?.name?.message}
        />
        <InputComp
          label={"Email"}
          name={"data.basics.email"}
          defaultValue={data.payload.data.basics.email}
          // error={errors?.basics?.email?.message}
        />
      </div>
      <div className="w-full">
        <InputComp
          label={"Address"}
          name={"data.basics.address"}
          defaultValue={data.payload.data.basics.address}

          // error={errors?.basics?.address?.message}
        />
      </div>
      <div className="w-full">
        <InputComp
          label={"Phone Number"}
          // value={number}
          // onValueChange={setNumber}
          name={"data.basics.phone"}
          defaultValue={data.payload.data.basics.phone}

          // error={errors?.basics?.number?.message}
          // isInvalid = {true}
          // error={"sdsd"}
        />
      </div>
      <div className="w-full">
        <Textarea
          variant="bordered"
          label="Description"
          className="border-2 border-blue-500 rounded-xl"
          defaultValue={data.payload.data.basics.summary}
          {...register("data.basics.summary")}
        />
      </div>
    </div>
  );
}

export default PersonalForm;
