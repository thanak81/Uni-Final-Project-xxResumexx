import React from "react";
import { useStore } from "../state/GlobalState";
import ResumeStructure from "../components/templatess/CVTemplate/ParentTemplate/ResumeStructure";
import { ScrollArea, Text } from "@radix-ui/themes";
import BasicsTemplate from "../components/templatess/CVTemplate/AllTemplates/Template1/BasicsTemplate";
import BasicsTemplate2 from "../components/templatess/CVTemplate/AllTemplates/Template2/BasicsTemplate2";
function Template1({ selectedTemplate }) {
  // switch(selectedTemplate){
  //   case ():

  //   break;
  //   case 2:
  //     break;
  // }

  return (
    <ResumeStructure>
      <div>{selectedTemplate.template}</div>
    </ResumeStructure>
  );
}

export default Template1;
