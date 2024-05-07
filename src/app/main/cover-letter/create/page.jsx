"use client";
import React, { useRef, useState } from "react";
import Form from "./Form";
import ProgressCard from "../../resume/components/ProgressCard";
import { FormProvider, useForm, useWatch } from "react-hook-form";
// import Template1Main from "../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import { useReactToPrint } from "react-to-print";
import { useActive, useActiveRight } from "../../resume/state/GlobalState";
import { createResume } from "@/app/services/resumeService";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import RightSidebar from "@/app/main-feature/RightSidebar";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import { createCoverLetter } from "@/app/services/coverLetterService";
import Template1Main from "../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import Template2Main from "../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";
import TabRightSide from "@/app/main-feature/components/TabRightSide";

function CreateCoverLetter() {
  const router = useRouter();
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Resume",
  });
  const data = [
    {
      id: 1,
      name: "Cover Letter Template1",
      img: "/CV.png",
      template: <Template1Main />,
    },
    // {
    //   id: 2,
    //   name: "Resume Template2",
    //   img: "/CV.png",
    //   template: <Template2Main />,
    // },
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

  let autoSaveData;
  if (typeof window !== "undefined") {
    autoSaveData = JSON.parse(localStorage.getItem("autoSavedCoverLetterData"));
  }
  const methods = useForm({
    defaultValues: {
      resumeInfo: {
        title: "Cover Letter",
        slug: "For work",
        // user_id: session?.user.payload.id,
      },
      data: autoSaveData
        ? autoSaveData.data
        : {
            profile: {},
            letter: {},
            employee: {}
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
    toast.success("Cover letter created successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
    // await createResume(data);
    await createCoverLetter(data);
    console.log("cover-letter", data);
    localStorage.removeItem("autoSavedCoverLetterData");
    router.push("/");
    router.refresh();
  };
  const activeRight = useActiveRight((state) => state.activeRight);
  const setActiveRight = useActiveRight((state) => state.setActiveRight);
  return (
    <>
      <div className="flex  gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
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
        <div className="self-center lg:self-start  ">
          <div
            onClick={setActiveRight}
            className="cursor-pointer"
            title={!active ? "Preview Resume" : "Close Preview"}
          >
            {/* <ArrowIcon /> */}
            {!activeRight ? <EyeIcon /> : <EyeCloseIcon />}
          </div>
          {activeRight && (
            // <ProgressCard
            //   printResume={printResume}
            //   onSubmit={methods.handleSubmit(onSubmit)}
            //   data={data}
            //   handleTemplate={handleTemplate}
            // />
            <TabRightSide
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

export default CreateCoverLetter;
