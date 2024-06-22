"use client"
import React from "react";
import FormComp from "./Form";
import { FormProvider, useForm } from "react-hook-form";
import ProgressCard from "../../components/ProgressCard";
import { useActive, useActiveRight, useLineHeight, usePadding } from "../../state/GlobalState";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import EyeIcon from "@/app/components/icons/EyeIcon";
import EyeCloseIcon from "@/app/components/icons/EyeCloseIcon";
import TabRightSide from "@/app/main-feature/components/TabRightSide";

function FormProviderComp({id,mutation ,active, data,handleTemplate, selectedTemplate, resumeDataById, printRef , printResume,styleSwitch }) {

  const methods = useForm({
    defaultValues: {
      resumeInfo: {
        title: `Resume ${id}`,
        slug: "For work",
        // user_id: session?.user.payload.id,
      },

      data: resumeDataById.payload? resumeDataById.payload.data : "",
    //   data: {
    //     education: resumeDataById.payload.data.education,
    //   },
    },
    // resolver: zodResolver(Schema)
  });

  const activeRight = useActiveRight((state)=> state.activeRight)
  const setActiveRight = useActiveRight((state)=> state.setActiveRight)

  const onSubmit = async (data) => {
    await mutation.mutate(data,id)
    // router.push(`/resume/edit/${id}`);
    // router.refresh();
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
          <FormComp
            selectedTemplate={selectedTemplate}
            data={resumeDataById}
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
          isSubmitting={methods.formState.isSubmitting}
          styleSwitch={styleSwitch}
          printResume={printResume}
          onSubmit={methods.handleSubmit(onSubmit)}
          data={data}
          handleTemplate={handleTemplate}/>
          )}
        </div>
    </>
  );
}

export default FormProviderComp;
