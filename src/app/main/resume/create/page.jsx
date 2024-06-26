"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Form from "./Form";
import { FormProvider, useForm } from "react-hook-form";
import Template1Main from "../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import { useReactToPrint } from "react-to-print";
import { useActive, useActiveRight } from "../state/GlobalState";
import Template2Main from "../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";
import { createResume } from "@/app/services/resumeService";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import TabRightSide from "@/app/main-feature/components/TabRightSide";
import Template1Styling from "../components/templatess/CVTemplate/AllTemplates/TemplateStyling/Template1Styling";
import Template2Styling from "../components/templatess/CVTemplate/AllTemplates/TemplateStyling/Template2Styling";
import Template3Main from "../components/templatess/CVTemplate/AllTemplates/Template3/Template3Main";
import AllData, { resumeTemplateData, stylingData } from "../data/resumeData";
import ResumePDFTemplate from "@/app/components/PDF/ResumePDFTemplate";
import PDFTemplate1 from "../components/templatess/CVTemplate/AllTemplates/PDFTemplate1/PDFTemplate1";
import { PDFDownloadLink } from "@react-pdf/renderer";

function CreateForm() {
  const router = useRouter();
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Resume" + crypto.randomUUID(),
  });

  const data = resumeTemplateData;

  function handleTemplate(template) {
    setSelectedTemplate(template);
  }
  const [selectedTemplate, setSelectedTemplate] = useState(data[0]);

  const stylingSwitcherData = stylingData;

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
  let autoSaveData;
  if (typeof window !== "undefined") {
    autoSaveData = JSON.parse(localStorage.getItem("autoSavedResumeData"));
  }
  // console.log("saveDATA",autoSaveData.data)
  const methods = useForm({
    defaultValues: {
      resumeInfo: {
        title: "Resume",
        slug: "For work",
        // user_id: session?.user.payload.id,
      },
      data: autoSaveData
        ? autoSaveData.data
        : {
            basics: {
              name: "",
              img: "",
              email: "",
              phone: "",
              address: "",
              summary: "",
            },
            profile: {},
            work: [{}],
            education: [{}],
            skills: [{}],
            language: [{}],
            custom: [{}],
          },
    },
    // resolver: zodResolver(Schema)
  });
  const active = useActive((state) => state.active);
  const printResume = () => {
    if (active) {
      handlePrint();
    }
  };
  const onSubmit = async (data) => {
    await createResume(data);
    localStorage.removeItem("autoSavedResumeData");
    router.push("/");
    router.refresh();
  };

  const activeRight = useActiveRight((state) => state.activeRight);
  const setActiveRight = useActiveRight((state) => state.setActiveRight);

  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col  justify-center  lg:flex-row  mt-5 lg:h-screen">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
            <Form

              activeRight={activeRight}
              autoSaveData={autoSaveData}
              selectedTemplate={selectedTemplate}
              printRef={printRef}
            />

            {/* <div className="hidden lg:block">
              <TemplateContainer/>
            </div> */}
          </form>
        </FormProvider>
        <div className="self-center lg:self-start">
          <div
            onClick={setActiveRight}
            className="cursor-pointer"
            title={!active ? "Preview Resume" : "Close Preview"}
          >
            {/* <ArrowIcon /> */}
            {!activeRight ? <EyeIcon /> : <EyeCloseIcon />}
          </div>
          {activeRight && (
            <TabRightSide
              isSubmitting={methods.formState.isSubmitting}
              styleSwitch={styleSwitch}
              printResume={printResume}
              onSubmit={methods.handleSubmit(onSubmit)}
              data={data}
              handleTemplate={handleTemplate}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CreateForm;
