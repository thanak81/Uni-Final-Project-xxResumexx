"use client";
import * as Form from "@radix-ui/react-form";
import React, { useState } from "react";
import Personal from "./ResumeForm/Personal";
import { Flex } from "@radix-ui/themes";
import {ScrollShadow } from "@nextui-org/react";
import { useActive} from "../state/GlobalState";
import Education from "./ResumeForm/Education";
import Template1 from "./Template1";
import TemplateContainer from "./TemplateContainer";
import ArrowIcon from "@/app/components/icons/ArrowIcon";
import WorkForm from "./ResumeForm/WorkForm";
import Skill from "./ResumeForm/Skill";
import ResumeHeader from "./ResumeForm/ResumeHeader";
import VolunteerForm from "./ResumeForm/VolunteerForm";
import LanguageForm from "./ResumeForm/LanguageForm";
import ReferenceForm from "./ResumeForm/ReferenceForm";

function FormComp({ register , selectedTemplate , printRef}) {
  // const [active, setActive] = useState(false);

  const active = useActive((state)=> state.active);
  const setActive = useActive((state)=> state.setActive)


  console.log(active)
  return (
    <Flex gap="3" className="w-full h-full " >
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`h-[70%] ${
          !active ? "w-[100vh]" : ""
        } flex flex-col gap-2 transition-all px-5`}
      >
        <ResumeHeader/>
        <Personal active={active} register={register} />
        <Education />
        <WorkForm />
        <Skill/>
        <VolunteerForm/>
        <LanguageForm/>
        <ReferenceForm/>
      </ScrollShadow>
      <div className="hidden md:block">
        <div onClick={setActive} className="cursor-pointer" title="Preview Resume">
          <ArrowIcon />
        </div>
        {active && <TemplateContainer printRef={printRef} selectedTemplate={selectedTemplate}/>}
      </div>
    </Flex>
  );
}

export default FormComp;
