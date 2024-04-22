import { Heading, Text } from "@radix-ui/themes";
import React, { Fragment } from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import InputComp from "../../components/InputComp";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
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

  const watchPresent = useWatch({
    control,
  })



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
            <Work index={index} handleRemove={handleRemove} register={register} watchPresent={watchPresent}/>
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


function Work({ index, handleRemove ,register,watchPresent}) {

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
      <div className="w-full flex items-center justify-end gap-2">
        <input
          type="checkbox"
          name="work.present"
          {...register(`work.${index}.present`)}
        />
        <label htmlFor="checkbox">Present?</label>
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
            disabled = {status ? true : false}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full">
        <Tiptap value={`work.${index}.summary`}/>
      </div>
    </>
  );
}
