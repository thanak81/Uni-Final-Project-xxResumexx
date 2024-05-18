"use client";
import React, { useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import { useActive } from "../state/GlobalState";
import TemplateContainer from "./TemplateContainer";
import { usePathname } from "next/navigation";
import { useFormContext, useWatch } from "react-hook-form";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import PersonalForm from "./ResumeForm/Personal";
import EducationForm from "./ResumeForm/Education";
import WorkForm from "./ResumeForm/WorkForm";
import Skill from "./ResumeForm/Skill";
import LanguageForm from "./ResumeForm/LanguageForm";
import ResumeHeader from "./ResumeForm/ResumeHeader";
import ProfileForm from "./ResumeForm/ProfileForm";
import NovelEditor from "../components/NovelEditor";
import CustomForm from "./ResumeForm/CustomForm";

function FormComp({ register, selectedTemplate, printRef , autoSaveData ,  activeRight }) {
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
    <Flex gap="3" className="w-full h-full transition-all">
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`h-[75%] 
        ${active && activeRight ? "w-[100%]" : "w-[90vh]"}
        
        flex flex-col gap-2 transition-all pr-5  w-full`}
      >
        <ResumeHeader /> 
        {/* <NovelEditor/> */}
         <PersonalForm active={active} register={register} autoSaveData={autoSaveData} selectedTemplate={selectedTemplate}/> 
        <ProfileForm autoSaveData={autoSaveData}/>
        <EducationForm autoSaveData={autoSaveData}/>
        <WorkForm autoSaveData={autoSaveData}/>
        <Skill autoSaveData={autoSaveData}/>
        <LanguageForm autoSaveData={autoSaveData}/> 
        <CustomForm autoSaveData={autoSaveData}/>
        {/* <AdditionalForm />*/}
      </ScrollShadow>
      <div className="hidden md:block">
        <div
          onClick={setActive}
          className="cursor-pointer"
          title={!active?"Preview Resume": "Close Preview"}
        >
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
