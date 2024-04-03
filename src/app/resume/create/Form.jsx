"use client";
import React, { useState } from "react";
import Personal from "./ResumeForm/Personal";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import { useStore } from "../state/GlobalState";
import Education from "./ResumeForm/Education";
import Template1 from "./Template1";
import TemplateContainer from "./TemplateContainer";
import ArrowIcon from "@/app/components/icons/ArrowIcon";
function Form() {
  const [active, setActive] = useState(false);
  function handleActive() {
    setActive((active) => !active);
  }
  return (
    <Flex gap="3" className="w-full h-full ">
      <ScrollShadow
        size={300}
        className={`h-[90%] ${
          !active ? "w-[100vh]" : ""
        } flex flex-col gap-2 transition-all`}
      >
        <Personal />
        <Education />
      </ScrollShadow>
      <div onClick={handleActive}>
        <ArrowIcon />
      </div>
      <div className="hidden lg:block">{active && <TemplateContainer />}</div>
    </Flex>
  );
}

export default Form;
