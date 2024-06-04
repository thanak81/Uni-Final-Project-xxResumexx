"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import { resumeForm, useActive } from "../state/GlobalState";
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
import { useTheme } from "next-themes";
import { toast } from "react-toastify";

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
  const autoSavedResumeData = useWatch({
    control,
  });
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/main/resume/create") {
      // Check if autoSavedResumeData is not empty
      if (Object.keys(autoSavedResumeData).length !== 0) {
        // Serialize the object before storing it in localStorage
        try {
          
          const serializedData = JSON.stringify(autoSavedResumeData);
          localStorage.setItem("autoSavedResumeData", serializedData);
        } catch (err) {
          if (err.name === "QuotaExceededError") {
            window.localStorage.clear();
          }
          toast.error(`Autosave is off.There an error on local storage. ${err}`, {
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
  }, [pathName, autoSavedResumeData]);

  const setForms = resumeForm((state) => state.setValue);
  const forms = resumeForm((state) => state.value);
  const formData = [
    {
      id: 1,
      component: <ResumeHeader />,
    },
    {
      id: 2,
      component: (
        <PersonalForm
          active={active}
          register={register}
          autoSaveData={autoSaveData}
          selectedTemplate={selectedTemplate}
        />
      ),
    },
    {
      id: 3,

      component: <ProfileForm autoSaveData={autoSaveData} />,
    },
    {
      id: 4,

      component: <EducationForm autoSaveData={autoSaveData} />,
    },
    {
      id: 5,

      component: <WorkForm autoSaveData={autoSaveData} />,
    },
    {
      id: 6,

      component: <Skill autoSaveData={autoSaveData} />,
    },
    {
      id: 7,

      component: <LanguageForm autoSaveData={autoSaveData} />,
    },
    {
      id: 8,

      component: <CustomForm autoSaveData={autoSaveData} />,
    },
  ];
  const theme = useTheme();
  return (
    <Flex gap="3" className="w-full h-full transition-all">
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`h-[75%] 
        ${active && activeRight ? "w-[100%]" : "w-[90vh]"}
        
        flex flex-col gap-2 transition-all ${
          theme.theme === "light" ? "bg-[#ECF0F5]" : ""
        } p-5  w-full`}
      >
        {/* <ResumeHeader />
         <PersonalForm
           active={active}
           register={register}
           autoSaveData={autoSaveData}
           selectedTemplate={selectedTemplate}
         />
        <ProfileForm autoSaveData={autoSaveData} />
         <EducationForm autoSaveData={autoSaveData} />
         <WorkForm autoSaveData={autoSaveData} />
         <Skill autoSaveData={autoSaveData} />
         <LanguageForm autoSaveData={autoSaveData} />
         <CustomForm autoSaveData={autoSaveData} />  */}
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
      <div className="hidden md:block">
        <div
          onClick={setActive}
          className="cursor-pointer"
          title={!active ? "Preview Resume" : "Close Preview"}
        >
          {!active ? <EyeIcon /> : <EyeCloseIcon />}
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
