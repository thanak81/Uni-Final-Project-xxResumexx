"use client";

import { Heading, Text } from "@radix-ui/themes";
import React, { Fragment, useEffect } from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { FormControl } from "@radix-ui/react-form";
import InputComp from "../../components/InputComp";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import AddIcon from "@/app/components/icons/AddIcon";
import { Button } from "@radix-ui/themes";
import { Divider } from "@nextui-org/react";
import RemoveIcon from "@/app/components/icons/RemoveIcon";
import Tiptap from "../../components/TipTap";

function EducationForm() {
  const { control, register } = useFormContext();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "education",
  });

  const watchPresent = useWatch({
    control,
  });

  function handleAdd() {
    const defaultEducation = {
      institution: "",
      studyType: "",
      level: "",
      area: "",
      startYear: "",
      endYear: "",
      summary: "",
    };
    append(defaultEducation);
  }

  // useEffect(()=> {
  //   append({})
  // },[append])

  function handleRemove() {
    remove();
  }
  return (
    <div className="rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start text-white" as="h3">
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
      {/* <InitialEducation /> */}
      {fields.map((field, index) => {
        return (
          <Fragment key={field.id}>
            <Education
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

export default EducationForm;

function Education({ index, handleRemove, register, watchPresent }) {
  console.log(watchPresent);
  let status;
  const checkPresent = watchPresent.education.map((edu)=> {
    if(edu.present){
      status = true;
    }else{
      status = false;
    }
  })
  return (
    <>
      {index > 0 && <Divider className="my-5 bg-blue-500" />}
      <div className="w-full flex gap-5 items-center">
        <InputComp
          label={"University or High School"}
          name={`education.${index}.institution`}
          // isInvalid = {true}
          // error={"sdsd"}
          // placeholder={"University"}
          //   value={value}
          // onValueChange={setValue}
        />
        <Button
          className="p-5 cursor-pointer"
          color="red"
          title="Remove"
          onClick={handleRemove}
        >
          <RemoveIcon />
        </Button>
      </div>

      <div className="w-full">
        <div className="flex gap-2">
          <InputComp
            label={"Level"}
            name={`education.${index}.level`}

            //   value={value}
            // onValueChange={setValue}
          />
          <InputComp
            label={"Fields"}
            name={`education.${index}.fields`}

            // value={value}
            // onValueChange={setValue}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-2">
        <input
          type="checkbox"
          name="education.present"
          {...register(`education.${index}.present`)}
        />
        <label htmlFor="checkbox">Present?</label>
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <InputComp
            label={"Start Year"}
            name={`education.${index}.startYear`}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
           <InputComp
              label={"End Year"}
              name={`education.${index}.endYear`}
              disabled={status ? true : false}
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
            />
        </div>
      </div>
      <div className="w-full">
        <Tiptap value={`education.${index}.summary`} index={index} />
      </div>
    </>
  );
}

function InitialEducation() {
  return (
    <>
      <div className="w-full">
        <InputComp
          label={"University or High School"}
          name={`education.institution`}

          // isInvalid = {true}
          // error={"sdsd"}
          // placeholder={"University"}
          //   value={value}
          // onValueChange={setValue}
        />
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <InputComp
            label={"Level"}
            name={`education.level`}

            //   value={value}
            // onValueChange={setValue}
          />
          <InputComp
            label={"Fields"}
            name={`education.fields`}

            // value={value}
            // onValueChange={setValue}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <InputComp
            label={"Start Year"}
            name={`education.startYear`}

            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <InputComp
            label={"End Year"}
            name={`education.endYear`}

            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full">
        <Tiptap value={"education.summary"} />
      </div>
      {/* <div className="w-full">
        <Textarea
          variant="bordered"
          label="Description"
          placeholder="Enter your description"
          // {...register("education.description")}
        />
      </div> */}
    </>
  );
}
