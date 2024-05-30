import React from "react";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import { useFormContext, useWatch } from "react-hook-form";
import BasicsTemplate from "./BasicsTemplate2";
import SkillTemplate from "./SkillTemplate";
import LanguageTemplate from "./LanguageTemplate";
import { cn } from "@/app/util/cn";
import parse from "html-react-parser";

function Template2Main() {
  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });

  return (
    <div className="flex h-full border">
      <div className=" w-[30%] bg-slate-800 ">
        <BasicsTemplate resumeData={resumeData} />
        <SkillTemplate resumeData={resumeData} />
        <LanguageTemplate resumeData={resumeData}/>
      </div>
      <div className="w-[35rem]">
        <div className=" text-black p-5 w-full ">
          {resumeData.data.basics.summary}
          <div
        className={cn(
          "prose marker:text-black [&_ul]:text-black list-disc px-5  text-black max-w-full text-justify text-sm",
        )}
      >
        {resumeData?.data?.profile?.summary &&
          parse(resumeData?.data?.profile?.summary)}
      </div>
          {/* parse(resumeData?.data?.profile?.summary)} */}

          {/* {data.basics?.summary
            ? data.basics?.summary
            : "        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  fugiat blanditiis dicta reiciendis placeat ab praesentium vero doloribus! Eaque quod omnis a dolorem repellat provident ab officiis totam, optio ut."} */}
        </div>
        <div className="">
          <ExperienceTemplate resumeData={resumeData} />
          <EducationTemplate resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default Template2Main;
