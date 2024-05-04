"use client";
import * as Form from "@radix-ui/react-form";
import React, { useEffect, useState } from "react";
import Personal from "./ResumeForm/Personal";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import { useActive } from "../state/GlobalState";
import Education from "./ResumeForm/Education";
import Template1 from "./Template1";
import TemplateContainer from "./TemplateContainer";
import ArrowIcon from "@/app/components/icons/ArrowIcon";
import WorkForm from "./ResumeForm/WorkForm";
import Skill from "./ResumeForm/Skill";
import ResumeHeader from "./ResumeForm/ResumeHeader";
import AdditionalForm from "./ResumeForm/AdditionalForm";
import LanguageForm from "./ResumeForm/LanguageForm";
import { usePathname } from "next/navigation";
import { useFormContext, useWatch } from "react-hook-form";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";

function FormComp({ register, selectedTemplate, printRef , autoSaveData }) {
  // const [active, setActive] = useState(false);

  const active = useActive((state) => state.active);
  const setActive = useActive((state) => state.setActive);
  const {control} = useFormContext()
  const autoSavedResumeData = useWatch({
    control
  });
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/main/resume/create") {
      // Check if autoSavedResumeData is not empty
      if (Object.keys(autoSavedResumeData).length !== 0) {
        // Serialize the object before storing it in localStorage
        const serializedData = JSON.stringify(autoSavedResumeData);
        localStorage.setItem("autoSavedResumeData", serializedData);
      }
    }
  }, [pathName, autoSavedResumeData]);

  return (
    <Flex gap="3" className="w-full h-full ">
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`h-[75%] ${
          !active ? "w-[100vh]" : ""
        } flex flex-col gap-2 transition-all px-5`}
      >
        <ResumeHeader />
        <Personal active={active} register={register} autoSaveData={autoSaveData}/>
        <Education autoSaveData={autoSaveData}/>
        <WorkForm autoSaveData={autoSaveData}/>
        <Skill autoSaveData={autoSaveData}/>
        <LanguageForm autoSaveData={autoSaveData}/>
        {/* <AdditionalForm /> */}
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
        {active && (
          <TemplateContainer
            printRef={printRef}
            selectedTemplate={selectedTemplate}
          />
        )}
      </div>
    </Flex>
  );
}

export default FormComp;
