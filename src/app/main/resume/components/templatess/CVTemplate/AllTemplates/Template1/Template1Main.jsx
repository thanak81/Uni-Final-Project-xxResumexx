"use client";
import React, { useEffect, useRef, useState } from "react";
import BasicsTemplate from "./BasicsTemplate";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import { useFormContext, useWatch } from "react-hook-form";
import SkillTemplate from "./SkillTemplate";
import { useReactToPrint } from "react-to-print";
import LanguageTemplate from "./LanguageTemplate";
import ProfileTemplate from "./ProfileTemplate";
import { Slider } from "@nextui-org/react";
import {
  useLineHeight,
  usePadding,
} from "@/app/main/resume/state/GlobalState";

function Template1Main() {
  const [margin, setMargin] = useState("pb-[0px]");
  const [line, setLine] = useState("leading-normal");
  const value = usePadding((state) => state.value);
  const lineValue = useLineHeight((state) => state.value);

  useEffect(() => {
    switch (value) {
      case 5:
        setMargin("pb-[5px]");
        break;
      case 10:
        setMargin("pb-[10px]");
        break;
      case 15:
        setMargin("pb-[15px]");
        break;
      case 20:
        setMargin("pb-[20px]");
        break;
      default:
        setMargin("pb-[0px]");
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
  }, [value, lineValue]);

  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });

  return (
    <div>
      <BasicsTemplate  resumeData={resumeData} margin={margin}/>
      <ProfileTemplate resumeData={resumeData} line={line} />
      <ExperienceTemplate resumeData={resumeData} />
      <EducationTemplate resumeData={resumeData} />
      <SkillTemplate resumeData={resumeData} />
      <LanguageTemplate resumeData={resumeData} />
    </div>
  );
}

export default Template1Main;
