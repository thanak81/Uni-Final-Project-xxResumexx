import React from "react";
import ExperienceTemplate from "../Template1/ExperienceTemplate";
import EducationTemplate from "../Template1/EducationTemplate";
import { useFormContext, useWatch } from "react-hook-form";
import BasicsTemplate from "../Template1/BasicsTemplate";

function Template2Main() {
  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });

  console.log(resumeData);
  return (
    <div className="flex">
      <div className="bg-blue-500">
        <BasicsTemplate resumeData={resumeData} />
      </div>
      <div>
        <ExperienceTemplate resumeData={resumeData} />
        <EducationTemplate resumeData={resumeData} />
      </div>
    </div>
  );
}

export default Template2Main;
