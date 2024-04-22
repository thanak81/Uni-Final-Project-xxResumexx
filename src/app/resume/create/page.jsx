"use client"
import React, { useRef, useState } from "react";
import Form from "./Form";
import ProgressCard from "../components/ProgressCard";
import TemplateContainer from "./TemplateContainer";
import { FormProvider, useForm } from "react-hook-form";
import BasicsTemplate from "../components/templatess/CVTemplate/AllTemplates/Template1/BasicsTemplate";
import BasicsTemplate2 from "../components/templatess/CVTemplate/AllTemplates/Template2/BasicsTemplate2";
import { Schema } from "./ResumeForm/Personal";
import { zodResolver } from "@hookform/resolvers/zod";
import Template1Main from "../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useReactToPrint } from "react-to-print";
import { useActive } from "../state/GlobalState";
import Template2Main from "../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";


function CreateForm() {
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  const data = [
    {
      id: 1,
      name: "Template1",
      template: <Template1Main />,
    },
    {
      id: 2,
      name: "Template2",
      template: <Template2Main />,
    },
    {
      id: 3,
      name: "Template2",
      template: <BasicsTemplate2 />,
    },
  ];

  function handleTemplate(template) {
    setSelectedTemplate(template);
  }
  const [selectedTemplate, setSelectedTemplate] = useState(data[0]);
  const methods = useForm({
    defaultValues: {
      basics: {
        name: "",
        email: "",
        phone: "",
        address: "",
        summary: "",
      },
      work: [{}],
      education: [{}],
      skills: {
        name: "",
        skill: [],
      },
    },
    // resolver: zodResolver(Schema)
  });
  const active = useActive((state)=> state.active);

  const onSubmit = (data) => {
    if(active){
      handlePrint();
    }
    console.log(data);
  };
  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Form selectedTemplate={selectedTemplate} printRef={printRef}/>
            {/* <div className="hidden lg:block">
              <TemplateContainer/>
            </div> */}
          </form>
        </FormProvider>
        <div className="self-center lg:self-start mt-5 ">
          <ProgressCard onSubmit={methods.handleSubmit(onSubmit)} data={data} handleTemplate={handleTemplate}/>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
