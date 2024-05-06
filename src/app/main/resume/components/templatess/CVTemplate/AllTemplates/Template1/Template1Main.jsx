"use client"
import React, { useRef } from "react";
import BasicsTemplate from "./BasicsTemplate";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import { useFormContext, useWatch } from "react-hook-form";
import SkillTemplate from "./SkillTemplate";
import { useReactToPrint } from "react-to-print";
import LanguageTemplate from "./LanguageTemplate";
import ProfileTemplate from "./ProfileTemplate";

function Template1Main({}) {
  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });
  const resumeDataLocal = JSON.parse(localStorage.getItem("autoSavedResumeData"))

  console.log("templat1",resumeData)
  return (
    <div>
      <BasicsTemplate resumeData={resumeData} resumeDataLocal={resumeDataLocal}/>
      <ProfileTemplate resumeData={resumeData}/>
      <ExperienceTemplate resumeData={resumeData} resumeDataLocal={resumeDataLocal}/>
      <EducationTemplate resumeData={resumeData} resumeDataLocal={resumeDataLocal}/>
      <SkillTemplate resumeData={resumeData} />
      <LanguageTemplate resumeData={resumeData}/>
    </div>
  );
}

export default Template1Main;
