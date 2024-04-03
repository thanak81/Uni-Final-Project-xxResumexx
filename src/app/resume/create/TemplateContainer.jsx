"use client";
import React from "react";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import Template1 from "./Template1";
function TemplateContainer() {
  return (
    <Flex gap="3" className="w-full h-full ">
      <ScrollShadow size={300} isEnabled={false} className="w-full h-[85%] flex flex-col gap-2">
        <Template1 />
      </ScrollShadow>
    </Flex>
  );
}

export default TemplateContainer;
