"use client"
import React from "react";
import Form from "./Form";
import ProgressCard from "../components/ProgressCard";
import TemplateContainer from "./TemplateContainer";
import { FormProvider, useForm } from "react-hook-form";

function CreateForm() {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Form />
            {/* <div className="hidden lg:block">
              <TemplateContainer/>
            </div> */}
          </form>
        </FormProvider>
        <div className="self-center lg:self-start mt-5">
          <ProgressCard onSubmit={methods.handleSubmit(onSubmit)}/>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
