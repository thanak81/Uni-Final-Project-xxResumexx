import React from "react";
import Form from "./Form";
import ProgressCard from "../components/ProgressCard";
import TemplateContainer from "./TemplateContainer";

function CreateForm() {
  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        <div className="">
          <Form />
        </div>
            {/* <div className="hidden lg:block">
              <TemplateContainer/>
            </div> */}
        <div className="self-center lg:self-start mt-5">
          <ProgressCard />
        </div>      
      </div>
    </>
  );
}

export default CreateForm;
