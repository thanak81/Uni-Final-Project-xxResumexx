"use client";
import React from "react";
import Form from "./Form";
import { Divider } from "@nextui-org/react";
import ProgressCard from "../components/ProgressCard";
import Template1 from "./Template1";
import TabsComp from "../components/TabsComp";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import TemplateContainer from "./TemplateContainer";

function CreateForm() {
  return (
    <>
      <div className="flex gap-3 flex-col justify-center lg:flex-row mt-5 h-screen">
        <div className="">
          <Form />
        </div>
            <div className="hidden lg:block">
              <TemplateContainer/>
            </div>
        <div className="self-center lg:self-start mt-5">
          <ProgressCard />
        </div>      
      </div>
    </>
  );
}

export default CreateForm;
