
import React from "react";
import Form from "./Form";
import { Divider } from "@nextui-org/react";
import ProgressCard from "../components/ProgressCard";
import Template1 from "./Template1";

function CreateForm() {
  return (
    <div className="flex gap-3 flex-col lg:flex-row justify-center mt-5">
      <Form />
      <Divider orientation="vertical" />
      <div className="hidden md:block">
        <Template1/>
 
      </div>
      <Divider orientation="vertical" />
      <ProgressCard />
    </div>
  );
}

export default CreateForm;
