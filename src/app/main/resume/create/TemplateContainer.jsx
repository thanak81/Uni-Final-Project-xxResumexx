"use client";
import React from "react";
import { Flex } from "@radix-ui/themes";
import { ScrollShadow } from "@nextui-org/react";
import Template1 from "./Template1";
import { usePathname } from "next/navigation";
function TemplateContainer({ selectedTemplate, printRef }) {
  const pathName = usePathname()
  return (
    <Flex gap="3" className="w-full h-full ">
      <ScrollShadow
        size={300}
        isEnabled={false}
        className={`w-full ${pathName.startsWith("/main/resume/edit") ? "h-[80%]" : "h-[74%]"}  flex flex-col gap-2 p-4 bg-[#ECF0F5]`}
      >
          <Template1 selectedTemplate={selectedTemplate} printRef={printRef} />
      </ScrollShadow>
    </Flex>
  );
}

export default TemplateContainer;
