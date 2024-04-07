"use client"
import React, { useState } from "react";
import Form from "./Form";
import ProgressCard from "../components/ProgressCard";
import TemplateContainer from "./TemplateContainer";
import { FormProvider, useForm } from "react-hook-form";
import BasicsTemplate from "../components/templatess/CVTemplate/AllTemplates/Template1/BasicsTemplate";
import BasicsTemplate2 from "../components/templatess/CVTemplate/AllTemplates/Template2/BasicsTemplate2";
function CreateForm() {
  const data = [
    {
      id: 1,
      name: "template1",
      template: <BasicsTemplate />,
    },
    {
      id: 2,
      name: "template2",
      template: <BasicsTemplate2 />,
    },
  ];

  function handleTemplate(template) {
    setSelectedTemplate(template);
  }
  const [selectedTemplate, setSelectedTemplate] = useState(data[0]);
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Form selectedTemplate={selectedTemplate}/>
            {/* <div className="hidden lg:block">
              <TemplateContainer/>
            </div> */}
          </form>
        </FormProvider>
        <div className="self-center lg:self-start mt-5">
          <ProgressCard onSubmit={methods.handleSubmit(onSubmit)} data={data} handleTemplate={handleTemplate}/>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
