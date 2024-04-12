import { Heading, Text } from "@radix-ui/themes";
import React, { Fragment } from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import InputComp from "../../components/InputComp";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@radix-ui/themes";
import AddIcon from "@/app/components/icons/AddIcon";
import { Divider } from "@nextui-org/react";
import RemoveIcon from "@/app/components/icons/RemoveIcon";
import Tiptap from "../../components/TipTap";

function WorkForm() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "work",
  });

  function handleAdd() {
    append();
  }

  function handleRemove() {
    remove();
  }

  return (
    <div className="rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Work
            </Heading>
          }
          subtitle={<small>Work Info Tip</small>}
        >
          <Text className="text-sm">
            Provide much details about yourself as much as possible.
          </Text>
        </AccordionItem>
      </Accordion>
      {/* <InitialWork /> */}
      {fields.map((field, index) => {
        return (
          <Fragment key={field.id}>
            <Work index={index} handleRemove={handleRemove} />
          </Fragment>
        );
      })}
      <div className="py-5">
        <Button onClick={handleAdd}>
          <AddIcon /> Add More
        </Button>
      </div>
    </div>
  );
}

export default WorkForm;

function InitialWork() {
  return (
    <>
      <div className="w-full">
        <InputComp
          name={"name"}
          label={"Company Name"}
          // isInvalid = {true}
          // error={"sdsd"}
          // placeholder={"University"}
          //   value={value}
          // onValueChange={setValue}
        />
      </div>
      <div className="w-full">
        <InputComp
          name={"name"}
          label={"Position"}
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
            name={"name"}
            label={"Start Year"}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <InputComp
            name={"name"}
            label={"End Year"}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full">
        <Textarea
          variant="bordered"
          label="Description"
          placeholder="Enter your description"
        />
      </div>
    </>
  );
}

function Work({ index, handleRemove }) {
  return (
    <>
      {index > 0 && <Divider className="my-5 bg-blue-500" />}
      
      <div className="w-full flex gap-5 items-center">
        <InputComp
          name={`work.${index}.company`}
          label={"Company Name"}
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
        <InputComp
          label={"Position"}
          name={`work.${index}.position`}
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
            label={"Start Year"}
            name={`work.${index}.startYear`}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <InputComp
            label={"End Year"}
            name={`work.${index}.endYear`}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full">
        <Tiptap value={`work.${index}.summary`} />
      </div>
    </>
  );
}
