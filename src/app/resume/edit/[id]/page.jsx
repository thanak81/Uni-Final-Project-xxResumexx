"use client";
import React, { useEffect, useRef, useState } from "react";
// import Form from "./Form";
// import { Form } from "react-hook-form";
import Form from "../../create/Form";
import ProgressCard from "../../components/ProgressCard";
import { FormProvider, useForm } from "react-hook-form";
import Template1Main from "../../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import { useReactToPrint } from "react-to-print";
// import { useActive } from "../state/GlobalState";
import Template2Main from "../../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";
import { createResume, getResumeById, updateResume } from "@/app/services/resumeService";
import Template1 from "../../create/Template1";
import { useActive } from "../../state/GlobalState";
import { useMutation, useQuery } from "react-query";

function EditResume({params}) {
  const id = params.id;

  const { isLoading, data:resumeDataById, error, isError } = useQuery("resume", getResumeById(params.id));
  console.log(resumeDataById)
  const mutation = useMutation({
    mutationFn: (request,id)=> updateResume(request,id)
  })
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Resume",
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
    // {
    //   id: 3,
    //   name: "Template2",
    //   template: <BasicsTemplate2 />,
    // },
  ];

  function handleTemplate(template) {
    setSelectedTemplate(template);
  }
  const [selectedTemplate, setSelectedTemplate] = useState(data[0]);
  // const [session , setSession]= useState()
  // console.log(session)
  // useEffect(()=> {
  //   const getSessionData = async ()=> {
  //     const sessionData = await getSession()
  //     setSession(sessionData)
  //     console.log(sessionData.user.payload.id);
  //   }

  //   getSessionData();
  // },[session])
  const methods = useForm({
    defaultValues: {
      resumeInfo: {
        title: "Resume",
        slug: "For work",
        // user_id: session?.user.payload.id,
      },
      data: {
        basics: {
          name: "",
          email: "",
          phone: "",
          address: "",
          summary: "",
        },
        work: [{}],
        education: [{}],
        skills: [{}],
      },
    },
    // resolver: zodResolver(Schema)
  });
  const active = useActive((state) => state.active);

  const onSubmit = async (data) => {
    if (active) {
      handlePrint();
    }

   await createResume(data);
  };
  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Form selectedTemplate={selectedTemplate} printRef={printRef} />
            {/* <div className="hidden lg:block">
              <TemplateContainer/>
            </div> */}
          </form>
        </FormProvider>
        <div className="self-center lg:self-start mt-5 ">
          <ProgressCard
            onSubmit={methods.handleSubmit(onSubmit)}
            data={data}
            handleTemplate={handleTemplate}
          />
        </div>
      </div>
    </>
  );
}

export default EditResume;
