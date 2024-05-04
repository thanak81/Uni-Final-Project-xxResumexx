"use client";
import * as Form from "@radix-ui/react-form";
import React, { useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import { useActive } from "@/app/main/resume/state/GlobalState";
import { usePathname } from "next/navigation";
import { useFormContext, useWatch } from "react-hook-form";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import TemplateContainer from "@/app/main/resume/create/TemplateContainer";

import LetterDetailForm from "./CoverLetterForm/LetterDetailsForm";
import ProgressCard from "@/app/main/resume/components/ProgressCard";
import ProfileForm from "./CoverLetterForm/ProfileForm";
import EmployeeForm from "./CoverLetterForm/EmployeeForm";
function FormComp({
  register,
  selectedTemplate,
  printRef,
  autoSaveData,
  activeRight,
  data
}) {
  // const [active, setActive] = useState(false);

  const active = useActive((state) => state.active);
  const setActive = useActive((state) => state.setActive);

  return (
    <Flex gap="3" className="w-full h-full transition-all">
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`h-[75%] 
        ${active && activeRight ? "w-[100%]" : "w-[90vh]"}
        
        flex flex-col gap-2 transition-all px-5 w-full`}
      >
        <ProfileForm active={active} data={data}/>
        <EmployeeForm data={data}/>
      </ScrollShadow>
      <div className="hidden md:block">
        <div
          onClick={setActive}
          className="cursor-pointer"
          title={!active ? "Preview Resume" : "Close Preview"}
        >
          {/* <ArrowIcon /> */}
          {!active ? <EyeIcon /> : <EyeCloseIcon />}
        </div>
        {active && (
          <TemplateContainer
            printRef={printRef}
            selectedTemplate={selectedTemplate}
          />
        )}
      </div>
      <div className="self-center lg:self-start mt-5 "></div>
    </Flex>
  );
}

export default FormComp;
