"use client"
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ProgressCard from "../../../resume/components/ProgressCard";
import { useActive, useActiveRight } from "../../../resume/state/GlobalState";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import FormComp from "./Form";
import Template1Main from "../../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import TabRightSide from "@/app/main-feature/components/TabRightSide";

function FormProviderComp({id,mutation ,active,  coverLetterById, printRef , printCoverLetter }) {
  const router = useRouter();

  const data = [
    {
      id: 1,
      name: "Cover Letter Template1",
      img: "/CV.png",
      template: <Template1Main coverLetterById={coverLetterById}/>,
    },
  ];

  function handleTemplate(template) {
    setSelectedTemplate(template);
  }
  const [selectedTemplate, setSelectedTemplate] = useState(data[0]);

  const methods = useForm({
    defaultValues: {
      resumeInfo: {
        title: "Cover Letter",
        slug: "For work",
        // user_id: session?.user.payload.id,
      },
      data: coverLetterById.payload? coverLetterById.payload.data : "",

    },
    // resolver: zodResolver(Schema)
  });

  const onSubmit = async (data) => {
    toast.success("Cover letter updated successfully", {
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
    // await createCoverLetter(data);
    await mutation.mutate(data,id)
    router.push("/");
    router.refresh();
  };
  const activeRight = useActiveRight((state) => state.activeRight);
  const setActiveRight = useActiveRight((state) => state.setActiveRight);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
          <FormComp
            selectedTemplate={selectedTemplate}
            data={coverLetterById}
            printRef={printRef}
            activeRight={activeRight}

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
          printResume={printCoverLetter}
          onSubmit={methods.handleSubmit(onSubmit)}
          data={data}
          handleTemplate={handleTemplate}
          />
          )}
        </div>
    </>
  );
}

export default FormProviderComp;
