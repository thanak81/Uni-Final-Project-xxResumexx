import React from "react";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import { useFormContext, useWatch } from "react-hook-form";
import BasicsTemplate from "./BasicsTemplate2";
function Template2Main() {
  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });

  console.log(resumeData);
  return (
    <div className="flex h-full border">
      <div className=" h-[297mm] w-[30%] bg-blue-500">
        <BasicsTemplate resumeData={resumeData} />
      </div>
      <div>
        <div className=" text-black p-5  ">
          Thanak is a student
          {/* {data.basics?.summary
            ? data.basics?.summary
            : "        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  fugiat blanditiis dicta reiciendis placeat ab praesentium vero doloribus! Eaque quod omnis a dolorem repellat provident ab officiis totam, optio ut."} */}
        </div>
        <div className="w-[99%]">
          <ExperienceTemplate resumeData={resumeData} />
          <EducationTemplate resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default Template2Main;
