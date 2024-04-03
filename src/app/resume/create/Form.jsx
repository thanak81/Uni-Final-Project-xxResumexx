"use client"
import React from "react";
import Personal from "./ResumeForm/Personal";
import { Flex} from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import { useStore } from "../state/GlobalState";
import Education from "./ResumeForm/Education";
import Template1 from "./Template1";
function Form() {

  return (
      <Flex gap="3" className="w-full h-full ">
        <ScrollShadow
          size={300}
          className="w-full h-[85%] flex flex-col gap-2"
        >
              <Personal />
              <Education/>

        </ScrollShadow>
      </Flex>
  );
}

export default Form;
