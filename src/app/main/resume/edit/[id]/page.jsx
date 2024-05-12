"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { Spinner } from "@nextui-org/react";
import Template1Styling from "../../components/templatess/CVTemplate/AllTemplates/TemplateStyling/Template1Styling";
import Template2Styling from "../../components/templatess/CVTemplate/AllTemplates/TemplateStyling/Template2Styling";

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


  const mutation = useMutation({
    mutationFn: (request) => updateResume(request, id),
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

  const active = useActive((state) => state.active);

  const printResume = () => {
    if (active) {
      handlePrint();
    }
  };

  const data = [
    {
      id: 1,
      name: "Resume Template1",
      img: "/CV.png",
      template: <Template1Main />,
    },
    {
      id: 2,
      name: "Resume Template2",
      img: "/CV1.png",
      template: <Template2Main />,
    },
  ];


  const stylingSwitcherData = useMemo(
    () => [
      {
        id: 1,
        title: "Template 1 Styling",
        styling: <Template1Styling />,
      },
      {
        id: 2,
        title: "Template 2 Styling",
        styling: <Template2Styling />,
      },
    ],
    []
  );
  const [selectedTemplate, setSelectedTemplate] = useState(data[0]);

  const [styleSwitch, setStylingSwitch] = useState(stylingSwitcherData[0]);
  useEffect(() => {
    switch (selectedTemplate.id) {
      case 1:
        setStylingSwitch(stylingSwitcherData[0]);
        break;
      case 2:
        setStylingSwitch(stylingSwitcherData[1]);
        break;
    }
  }, [selectedTemplate, stylingSwitcherData]);

  function handleTemplate(template) {
    setSelectedTemplate(template);
  }

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        {resumeDataById.payload ? (
          <FormProviderComp
            id={id}
            mutation={mutation}
            data={data}
            handleTemplate={handleTemplate}
            styleSwitch={styleSwitch}
            selectedTemplate={selectedTemplate}
            resumeDataById={resumeDataById}
            printResume={printResume}
            printRef={printRef}
            active={active}
          />
        ) : (
          <div className="flex flex-col items-center gap-5">
            <Heading>Resume not found 😥! Create one for free 😀!</Heading>
            <Button>
              <Link href="/main/resume/create">Create Resume</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default EditResume;
