import { Accordion, AccordionItem } from "@nextui-org/react";
import { Heading } from "@radix-ui/themes";
import React from "react";
import VolunteerForm from "./VolunteerForm";
import LanguageForm from "./LanguageForm";
import ReferenceForm from "./ReferenceForm";
import { useFormContext } from "react-hook-form";
function AdditionalForm() {
  const { register } = useFormContext();
  return (
    <div className=" rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
      <Accordion>
        <AccordionItem
          title={
            <Heading className="self-start" as="h3">
              Additional Data
            </Heading>
          }
          subtitle={<small>Give yourself more details.</small>}
        >
          <div>
            <VolunteerForm />
          </div>
          <LanguageForm />
          <ReferenceForm />
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AdditionalForm;
