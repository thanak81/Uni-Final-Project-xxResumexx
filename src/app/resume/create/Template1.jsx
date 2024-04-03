"use client";

import React from "react";
import { useStore } from "../state/GlobalState";
import ResumeStructure from "../components/templatess/CVTemplate/ParentTemplate/ResumeStructure";
import { ScrollArea, Text } from "@radix-ui/themes";
import BasicsTemplate from "../components/templatess/CVTemplate/AllTemplates/Template1/BasicsTemplate";

function Template1() {
  const name = useStore((state) => state.name);
  return (
    <div className="w-full p-5">
      <ResumeStructure>
        <div className="flex flex-col py-5 gap-2">
          <BasicsTemplate />
        </div>
      </ResumeStructure>
    </div>
  );
}

export default Template1;
