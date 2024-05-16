"use client";

import { Heading, Text } from "@radix-ui/themes";
import React, { Fragment } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import InputComp from "../../components/InputComp";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import AddIcon from "@/app/components/icons/AddIcon";
import { Button } from "@radix-ui/themes";
import { Divider } from "@nextui-org/react";
import RemoveIcon from "@/app/components/icons/RemoveIcon";
import Tiptap from "../../components/TipTap";

function CustomForm({ autoSaveData }) {
  const { control, register } = useFormContext();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "data.custom",
  });

  const watchPresent = useWatch({
    control,
  });

  function handleAdd(e) {
    e.preventDefault();
    append();
  }


  function handleRemove(index) {
    remove(index);
  }
  return (
    <div className="rounded-xl flex flex-col gap-2 justify-center items-center ">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Custom Form
            </Heading>
          }
          subtitle={<small>Custom Form Tips</small>}
        >
          <Text className="text-sm">
            Provide more details to your employee.
            Reference, Awards ......
          </Text>
        </AccordionItem>
      </Accordion>
      {/* <InitialEducation /> */}

      {fields.map((field, index) => {
        return (
          <Fragment key={field.id}>
            <Custom
              autoSaveData={autoSaveData}
              index={index}
              handleRemove={handleRemove}
              register={register}
              watchPresent={watchPresent}
            />
          </Fragment>
        );
      })}
      <div className="py-5">
        <Button onClick={handleAdd} className="cursor-pointer">
          <AddIcon /> Add More
        </Button>
      </div>
    </div>
  );
}

export default CustomForm;

function Custom({
  index,
  handleRemove,
  register,
  watchPresent,
  autoSaveData,
}) {
  return (
    <>
      {index > 0 && <Divider className="my-5 bg-blue-500" />}
      <div className="w-full flex gap-5 items-center">
        <InputComp
          label={"Heading"}
          name={`data.custom.${index}.heading`}
          defaultValue={
            autoSaveData?.data?.custom
              ? autoSaveData?.data?.custom[index]?.heading
              : ""
          }
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
      <div className="w-full">
        <Tiptap
          value={`data.custom.${index}.summary`}
          data={
            autoSaveData?.data?.custom
              ?  autoSaveData?.data?.custom[index]?.summary
              : ""
          }
        />
      </div>
    </>
  );
}
