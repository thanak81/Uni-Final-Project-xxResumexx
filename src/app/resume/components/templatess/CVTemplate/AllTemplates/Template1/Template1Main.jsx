"use client"
import React, { useRef } from "react";
import BasicsTemplate from "./BasicsTemplate";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import { useFormContext, useWatch } from "react-hook-form";
import SkillTemplate from "./SkillTemplate";
import { useReactToPrint } from "react-to-print";
import LanguageTemplate from "./LanguageTemplate";

function Template1Main({}) {
  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });

  console.log(resumeData)
  return (
    <div>
      <BasicsTemplate resumeData={resumeData}/>
      <ExperienceTemplate resumeData={resumeData}/>
      <EducationTemplate resumeData={resumeData}/>
      <SkillTemplate resumeData={resumeData}/>
      <LanguageTemplate resumeData={resumeData}/>
    </div>
  );
}

export default Template1Main;
