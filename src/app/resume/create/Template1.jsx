import React from "react";
import { useStore } from "../state/GlobalState";
import ResumeStructure from "../components/templatess/CVTemplate/ParentTemplate/ResumeStructure";
import { ScrollArea, Text } from "@radix-ui/themes";
import BasicsTemplate from "../components/templatess/CVTemplate/AllTemplates/Template1/BasicsTemplate";
import BasicsTemplate2 from "../components/templatess/CVTemplate/AllTemplates/Template2/BasicsTemplate2";
function Template1({selectedTemplate}) {
  const name = useStore((state) => state.name);
  return (
    <div className="w-full p-5">
      <ResumeStructure>
        <div className="flex flex-col py-5 gap-2">
          {selectedTemplate.template}
        </div>
      </ResumeStructure>
    </div>
  );
}

export default Template1;
