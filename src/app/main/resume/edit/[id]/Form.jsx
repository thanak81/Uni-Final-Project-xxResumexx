"use client";
import * as Form from "@radix-ui/react-form";
import React, { useState } from "react";
import Personal from "./ResumeForm/Personal";
import { Flex } from "@radix-ui/themes";
import {ScrollShadow } from "@nextui-org/react";
import { useActive} from "../../state/GlobalState";
import Education from "./ResumeForm/Education";
// import Template1 from "./Template1";
// import TemplateContainer from "./TemplateContainer";
import TemplateContainer from "../../create/TemplateContainer";
import ArrowIcon from "@/app/components/icons/ArrowIcon";
import WorkForm from "./ResumeForm/WorkForm";
import Skill from "./ResumeForm/Skill";
import ResumeHeader from "./ResumeForm/ResumeHeader";
import LanguageForm from "./ResumeForm/LanguageForm";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import ProfileForm from "./ResumeForm/ProfileForm";

function FormComp({ register , selectedTemplate , printRef , data,activeRight}) {

  const active = useActive((state)=> state.active);
  const setActive = useActive((state)=> state.setActive)
  function handleActive() {
    setActive((active) => !active);
  }

  return (
    <Flex gap="3" className="w-full h-full " >
        <ScrollShadow
        size={300}
        isEnabled={false}
        className={`h-[75%] 
        ${active && activeRight ? "w-[100%]" : "w-[90vh]"}
        
        flex flex-col gap-2 transition-all px-5 w-full`}
      >
        <ResumeHeader/>
        <Personal data={data} active={active} register={register} />
        <ProfileForm  data={data}/> 
        <Education data={data}/>
        <WorkForm data={data}/>
        <Skill data={data}/>
        <LanguageForm data={data}/>
      </ScrollShadow>
      <div className="hidden md:block">
      <div
          onClick={setActive}
          className="cursor-pointer"
          title={!active?"Preview Resume": "Close Preview"}
        >
          {/* <ArrowIcon /> */}
          {!active? <EyeIcon/> : <EyeCloseIcon/>}
        </div>
        {active && <TemplateContainer printRef={printRef} selectedTemplate={selectedTemplate}/>}
      </div>
    </Flex>
  );
}

export default FormComp;
