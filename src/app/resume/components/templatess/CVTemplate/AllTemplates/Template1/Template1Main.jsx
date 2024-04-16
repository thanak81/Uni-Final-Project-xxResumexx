import React from "react";
import BasicsTemplate from "./BasicsTemplate";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import { useFormContext, useWatch } from "react-hook-form";

function Template1Main() {
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
    </div>
  );
}

export default Template1Main;
