import { Heading, Text } from "@radix-ui/themes";
import React, { Fragment } from "react";
import { Accordion, AccordionItem, Input, Textarea } from "@nextui-org/react";
import { FormControl } from "@radix-ui/react-form";
import InputComp from "../../components/InputComp";
import { useFieldArray, useFormContext } from "react-hook-form";
import AddIcon from "@/app/components/icons/AddIcon";
import { Button } from "@radix-ui/themes";
function EducationForm() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  function handleAdd() {

    const defaultEducation = {
      institution: "",
      studyType: "",
      area: "",
      startDate: "",
      endDate: "",
    };
    append();
  }
  return (
    <div className="px-8 rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
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
      <InitialEducation/>
      {fields.map((field, index) => {
        return (
          (
            <Fragment key={field.id}>
              <Education index={index} />
            </Fragment>
          )
        );
      })}
      <Button onClick={handleAdd}>
        <AddIcon /> Add More
      </Button>
    </div>
  );
}

export default EducationForm;

function Education({ index }) {
  return (
    <>
      <div className="w-full">
        <InputComp
          label={"University or High School"}
          name={`education.${index}.institution`}

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
        <Textarea
          variant="bordered"
          label="Description"
          placeholder="Enter your description"
        />
      </div>
    </>
  );
}
