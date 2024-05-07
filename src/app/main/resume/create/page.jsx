"use client";
import React, { useRef, useState } from "react";
import Form from "./Form";
import ProgressCard from "../components/ProgressCard";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import Template1Main from "../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import { useReactToPrint } from "react-to-print";
import { useActive, useActiveRight } from "../state/GlobalState";
import Template2Main from "../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";
import { createResume } from "@/app/services/resumeService";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import TabComp from "@/app/main-feature/components/TabComp";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import BardComp from "@/app/components/BardComp";
import TabRightSide from "@/app/main-feature/components/TabRightSide";

function CreateForm() {
  const router = useRouter();
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Resume",
  });
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
          },
    },
    // resolver: zodResolver(Schema)
  });
  // const notify = () => toast("Resume created successfully");
  // console.log("notify",notify)
  const active = useActive((state) => state.active);
  const printResume = () => {
    if (active) {
      handlePrint();
    }
  };
  const onSubmit = async (data) => {
    toast.success("Resume created successfully", {
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
    await createResume(data);
    localStorage.removeItem("autoSavedResumeData");
    router.push("/");
    router.refresh();
  };

  const activeRight = useActiveRight((state) => state.activeRight);
  const setActiveRight = useActiveRight((state) => state.setActiveRight);
  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        {/* <div className="w-full">
          <BardComp />
        </div> */}
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

export default CreateForm;
