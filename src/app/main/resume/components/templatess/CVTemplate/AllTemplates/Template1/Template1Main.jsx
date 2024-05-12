"use client";
import React, { useEffect, useRef, useState } from "react";
import BasicsTemplate from "./BasicsTemplate";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import { useFormContext, useWatch } from "react-hook-form";
import SkillTemplate from "./SkillTemplate";
import LanguageTemplate from "./LanguageTemplate";
import ProfileTemplate from "./ProfileTemplate";
import {
  useGap,
  useLineHeight,
  usePadding,
} from "@/app/main/resume/state/GlobalState";

function Template1Main() {
  const [margin, setMargin] = useState("py-[0px]");
  const [line, setLine] = useState("leading-normal");
  const value = usePadding((state) => state.value);
  const lineValue = useLineHeight((state) => state.value);
  const [gap,setGap] = useState("gap-5");
  const gapValue = useGap((state)=> state.value)

  useEffect(() => {
    switch (value) {
      case 5:
        setMargin("py-[5px]");
        break;
      case 10:
        setMargin("py-[10px]");
        break;
      case 15:
        setMargin("py-[15px]");
        break;
      case 20:
        setMargin("py-[20px]");
        break;
      default:
        setMargin("py-[0px]");
    }
    switch (lineValue) {
      case 10:
        setLine("leading-tight");
        break;
      case 20:
        setLine("leading-snug");
        break;
      case 30:
        setLine("leading-normal");
        break;
      case 40:
        setLine("leading-relaxed");
        break;
      case 50:
        setLine("leading-loose");
        break;
      default:
        setLine("leading-normal");
    }
    switch (gapValue) {
      case 0:
        setGap("gap-[4px]")
        break;
      case 2:
        setGap("gap-[8px]");
        break;
      case 4:
        setGap("gap-[16px]");
        break;
      case 6:
        setGap("gap-[32px]");
        break;
      default:
        setGap("gap-[32px]");
    }
  }, [value, lineValue,gapValue]);

  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });

  return (
    <div>
      <BasicsTemplate  resumeData={resumeData} margin={margin} line={line}/>
      <ProfileTemplate resumeData={resumeData} line={line} />
      <ExperienceTemplate resumeData={resumeData} gap={gap}/>
      <EducationTemplate resumeData={resumeData} gap={gap} />
      <SkillTemplate resumeData={resumeData}/>
      <LanguageTemplate resumeData={resumeData} />
    </div>
  );
}

export default Template1Main;
