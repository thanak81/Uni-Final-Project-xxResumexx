"use client";

import { Heading, Text } from "@radix-ui/themes";
import React, { Fragment, useEffect } from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { FormControl } from "@radix-ui/react-form";
// import InputComp from "../../components/InputComp";
import InputComp from "@/app/resume/components/InputComp";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import AddIcon from "@/app/components/icons/AddIcon";
import { Button } from "@radix-ui/themes";
import { Divider } from "@nextui-org/react";
import RemoveIcon from "@/app/components/icons/RemoveIcon";
// import Tiptap from "../../components/TipTap";
import Tiptap from "@/app/resume/components/TipTap";

function EducationForm({ data }) {
  const { control, register } = useFormContext();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "data.education",
  });
  const watchPresent = useWatch({
    control,
  });

  function handleAdd(e) {
    e.preventDefault();
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

  function handleRemove(index) {
    remove(index);
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
              data={data}
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

function Education({ index, handleRemove, register, watchPresent, data }) {
  console.log(watchPresent);
  let status;
  const checkPresent = watchPresent.data.education.map((edu) => {
    if (edu.present) {
      status = true;
    } else {
      status = false;
    }
  });
  return (
    <>
      {index > 0 && <Divider className="my-5 bg-blue-500" />}
      <div className="w-full flex gap-5 items-center">
        <InputComp
          label={"University or High School"}
          name={`data.education.${index}.institution`}
          defaultValue={
            data?.payload?.data?.education[index]?.institution
              ? data.payload.data.education[index].institution
              : ""
          }
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
          onClick={() => handleRemove(index)}
        >
          <RemoveIcon />
        </Button>
      </div>

      <div className="w-full">
        <div className="flex gap-2">
          <InputComp
            label={"Level"}
            name={`data.education.${index}.level`}
            defaultValue={
              data?.payload?.data?.education[index]?.level
                ? data.payload.data.education[index].level
                : ""
            }

            //   value={value}
            // onValueChange={setValue}
          />
          <InputComp
            label={"Fields"}
            name={`data.education.${index}.area`}
            defaultValue={
              data?.payload?.data?.education[index]?.area
                ? data.payload.data.education[index].area
                : ""
            }

            // value={value}
            // onValueChange={setValue}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-2">
        <input
          type="checkbox"
          name="education.present"
          defaultValue={
            data?.payload?.data?.education[index]?.present
              ? data.payload.data.education[index].present
              : ""
          }
          {...register(`data.education.${index}.present`)}
        />
        <label htmlFor="checkbox">Present?</label>
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <InputComp
            label={"Start Year"}
            name={`data.education.${index}.startYear`}
            defaultValue={
              data?.payload?.data?.education[index]?.startYear
                ? data.payload.data.education[index].startYear
                : ""
            }

            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <InputComp
            label={"End Year"}
            name={`data.education.${index}.endYear`}
            disabled={status ? true : false}
            defaultValue={
              data?.payload?.data?.education[index]?.endYear
                ? data.payload.data.education[index].endYear
                : ""
            }

            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full">
        <Tiptap
          value={`data.education.${index}.summary`}
          index={index}
          data={
            data?.payload?.data?.education[index]?.summary
              ? data.payload.data.education[index].summary
              : ""
          }
        />
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
