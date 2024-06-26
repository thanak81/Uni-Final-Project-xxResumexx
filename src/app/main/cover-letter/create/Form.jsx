"use client";
import * as Form from "@radix-ui/react-form";
import React, { useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
// import { useActive } from "../state/GlobalState";
import { useActive } from "../../resume/state/GlobalState";
// import TemplateContainer from "./TemplateContainer";
import { usePathname } from "next/navigation";
import { useFormContext, useWatch } from "react-hook-form";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import TemplateContainer from "../../resume/create/TemplateContainer";
import ProfileForm from "./CoverLetterForm/ProfileForm";
import EmployeeForm from "./CoverLetterForm/EmployeeForm";
import LetterDetailForm from "./CoverLetterForm/LetterDetailsForm";
import ProgressCard from "../../resume/components/ProgressCard";
import ResumeHeader from "../../resume/create/ResumeForm/ResumeHeader";
import { useTheme } from "next-themes";

function FormComp({
  register,
  selectedTemplate,
  printRef,
  autoSaveData,
  activeRight,
}) {
  // const [active, setActive] = useState(false);

  const active = useActive((state) => state.active);
  const setActive = useActive((state) => state.setActive);
  const { control } = useFormContext();
  const autoSavedCoverLetterData = useWatch({
    control,
  });
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/main/cover-letter/create") {
      // Check if autoSavedResumeData is not empty
      if (Object.keys(autoSavedCoverLetterData).length !== 0) {
        // Serialize the object before storing it in localStorage
      try{
        const serializedData = JSON.stringify(autoSavedCoverLetterData);
        localStorage.setItem("autoSavedCoverLetterData", serializedData);
      }catch(err){
        if (err.name === 'QuotaExceededError') {
          window.localStorage.clear()
        }
        toast.error(`There an error on local storage ${err}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
      }
       
      }
    }
  }, [pathName, autoSavedCoverLetterData]);
  const theme = useTheme();

  const formData = [
    {
      id: 1,
      component: <ProfileForm autoSaveData={autoSaveData} />,
    },
    {
      id: 2,
      component: <EmployeeForm autoSaveData={autoSaveData} />,
    },
  ];

  return (
    <Flex gap="3" className="w-full h-full transition-all">
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`h-[75%] 
        ${active && activeRight ? "w-[100%]" : "w-[90vh]"}
        ${theme.theme === "light" ? "bg-[#ECF0F5]" : ""} 
        flex flex-col gap-2 transition-all  w-full`}
      >
        {formData.map((form) => (
          <div
            className={`w-full  px-5" key={form.id} ${
              theme.theme === "light"
                ? "bg-white rounded-xl p-5 border"
                : "bg-[#1B1B1B] rounded-xl p-5"
            }`}
            key={form.id}
          >
            {form.component}
          </div>
        ))}
      </ScrollShadow>
      <div className="hidden md:block ">
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
      {/* <div className="self-center lg:self-start mt-5 "></div> */}
    </Flex>
  );
}

export default FormComp;
