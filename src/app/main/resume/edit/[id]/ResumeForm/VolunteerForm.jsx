import { Heading, Text } from "@radix-ui/themes";
import React, { Fragment } from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import InputComp from "../../../components/InputComp";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Button } from "@radix-ui/themes";
import AddIcon from "@/app/components/icons/AddIcon";
import { Divider } from "@nextui-org/react";
import RemoveIcon from "@/app/components/icons/RemoveIcon";
import Tiptap from "../../../components/TipTap";
// import AddButton from "../components/AddButton";

function VolunteerForm({ data }) {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "data.volunteer",
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
    <div className="rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Volunteer
            </Heading>
          }
          subtitle={<small>Volunteer Info Tip</small>}
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
            <Volunteer
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

export default VolunteerForm;

function Volunteer({ data, index, handleRemove, register, watchPresent }) {
  let status;
  const checkPresent = watchPresent.data.volunteer.map((edu) => {
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
          name={`data.volunteer.${index}.organization`}
          label={"Organization Name"}
          defaultValue={
            data?.payload?.data?.volunteer[index]?.organization
              ? data.payload.data.volunteer[index].organization
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
        <InputComp
          label={"Position"}
          name={`data.volunteer.${index}.position`}
          defaultValue={
            data?.payload?.data?.volunteer[index]?.position
              ? data.payload.data.volunteer[index].position
              : ""
          }
          // isInvalid = {true}
          // error={"sdsd"}
          // placeholder={"University"}
          //   value={value}
          // onValueChange={setValue}
        />
      </div>
      <div className="w-full">
        <InputComp
          label={"URL"}
          name={`data.volunteer.${index}.url`}
          defaultValue={
            data?.payload?.data?.volunteer[index]?.url
              ? data.payload.data.volunteer[index].url
              : ""
          }
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
          name="volunteer.present"
          {...register(`data.volunteer.${index}.present`)}
        />
        <label htmlFor="checkbox">Present?</label>
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          <InputComp
            label={"Start Year"}
            name={`data.volunteer.${index}.startYear`}
            defaultValue={
              data?.payload?.data?.volunteer[index]?.startYear
                ? data.payload.data.volunteer[index].startYear
                : ""
            }
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
          <InputComp
            label={"End Year"}
            name={`data.volunteer.${index}.endYear`}
            disabled={status ? true : false}
            defaultValue={
              data?.payload?.data?.volunteer[index]?.endYear
                ? data.payload.data.volunteer[index].endYear
                : ""
            }
            // value={status? "" : return}
            // onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full">
        <Tiptap
          value={`data.volunteer.${index}.summary`}
          index={index}
          data={
            data?.payload?.data?.volunteer[index]?.summary
              ? data.payload.data.volunteer[index].summary
              : ""
          }
        />
      </div>
    </>
  );
}
