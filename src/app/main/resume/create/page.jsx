"use client";
import React, { useRef, useState } from "react";
import Form from "./Form";
import ProgressCard from "../components/ProgressCard";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import Template1Main from "../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import { useReactToPrint } from "react-to-print";
import { useActive } from "../state/GlobalState";
import Template2Main from "../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";
import { createResume } from "@/app/services/resumeService";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import TabComp from "@/app/main-feature/components/TabComp";

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

  let autoSaveData
  if (typeof window !== "undefined") {
    autoSaveData = JSON.parse(
      localStorage.getItem("autoSavedResumeData")
    );
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
  return (
    <>
      <div className="flex gap-10 lg:gap-5 flex-col justify-center  lg:flex-row  mt-5 lg:h-screen">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Form
              autoSaveData={autoSaveData}
              selectedTemplate={selectedTemplate}
              printRef={printRef}
            />
            {/* <div className="hidden lg:block">
              <TemplateContainer/>
            </div> */}
          </form>
        </FormProvider>
        <div className="self-center lg:self-start mt-5 ">
          <ProgressCard
            printResume={printResume}
            onSubmit={methods.handleSubmit(onSubmit)}
            data={data}
            handleTemplate={handleTemplate}
          />
        </div>
      </div>
    </>
  );
}

export default CreateForm;
