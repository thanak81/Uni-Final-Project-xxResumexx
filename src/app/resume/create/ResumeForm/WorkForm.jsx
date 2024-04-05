import { Heading, Text } from "@radix-ui/themes";
import React from "react";
import { Accordion, AccordionItem,Input, Textarea } from "@nextui-org/react";
import InputComp from "../../components/InputComp";

function WorkForm() {
    
  return (
    <div className="px-8 rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
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
    <div className="w-full">
      <InputComp
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
              label={"Start Year"}
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
            />
            <InputComp
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
  </div>
  );
}

export default WorkForm;
