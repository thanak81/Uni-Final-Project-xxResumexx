"use client";
import React, { useEffect, useRef, useState } from "react";
// import Form from "./Form";
// import { Form } from "react-hook-form";
import ProgressCard from "../../components/ProgressCard";
import { FormProvider, useForm } from "react-hook-form";
import Template1Main from "../../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import { useReactToPrint } from "react-to-print";
// import { useActive } from "../state/GlobalState";
import Template2Main from "../../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";
import {
  createResume,
  getResumeById,
  updateResume,
} from "@/app/services/resumeService";
import Template1 from "../../create/Template1";
import { useActive } from "../../state/GlobalState";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import FormComp from "./Form";
import FormProviderComp from "./FormProvider";
import Link from "next/link";
import { Button, Heading } from "@radix-ui/themes";

function EditResume({ params }) {
  const id = params.id;
  const queryClient = new useQueryClient();
  const {
    isLoading,
    data: resumeDataById,
    error,
    isError,
  } = useQuery("resume", () => getResumeById(id));
  // const { isLoading, data, error, isError } = useQuery("resume", getAllResume);

  console.log(resumeDataById);

  const mutation = useMutation({
    mutationFn: (request, id) => updateResume(request, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resume"] });
    },
  });

  // console.log(data)
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

  const active = useActive((state) => state.active);

  if (isLoading) {
    return (
      <span>
        <p>Loading.....</p>
      </span>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        {/* <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormComp selectedTemplate={selectedTemplate} data={resumeDataById} printRef={printRef} />
          </form>
        </FormProvider> */}
        {resumeDataById.payload ? (
          <FormProviderComp
            id={id}
            mutation={mutation}
            data={data}
            handleTemplate={handleTemplate}
            selectedTemplate={selectedTemplate}
            resumeDataById={resumeDataById}
            printRe={printRef}
          />
        ) : (
          <div className="flex flex-col items-center gap-5">
            <Heading>Resume not found 😥</Heading>
            <Button>
              <Link href="/">Go back</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default EditResume;
