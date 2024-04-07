"use client";
import * as Form from "@radix-ui/react-form";
import React, { useState } from "react";
import Personal from "./ResumeForm/Personal";
import { Flex } from "@radix-ui/themes";
import { Input, ScrollShadow } from "@nextui-org/react";
import { useStore } from "../state/GlobalState";
import Education from "./ResumeForm/Education";
import Template1 from "./Template1";
import TemplateContainer from "./TemplateContainer";
import ArrowIcon from "@/app/components/icons/ArrowIcon";
import WorkForm from "./ResumeForm/WorkForm";
import ProgressCard from "../components/ProgressCard";
function FormComp({ register , selectedTemplate}) {
  const [active, setActive] = useState(false);


  function handleActive() {
    setActive((active) => !active);
  }

  return (
    <Flex gap="3" className="w-full h-full ">
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`h-[70%] ${
          !active ? "w-[100vh]" : ""
        } flex flex-col gap-2 transition-all`}
      >
        <Personal active={active} register={register} />
        <Education />
        <WorkForm />
      </ScrollShadow>
      <div className="hidden lg:block">
        <div onClick={handleActive}>
          <ArrowIcon />
        </div>
        {active && <TemplateContainer selectedTemplate={selectedTemplate}/>}
      </div>
    </Flex>
  );
}

export default FormComp;
