import React from "react";
import FormComp from "./Form";
import { FormProvider, useForm } from "react-hook-form";
import ProgressCard from "../../components/ProgressCard";
import { useActive } from "../../state/GlobalState";

function FormProviderComp({id,mutation , data,handleTemplate, selectedTemplate, resumeDataById, printRef , printResume }) {
  const methods = useForm({
    defaultValues: {
      resumeInfo: {
        title: "Resume",
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


  const onSubmit = async (data) => {
    console.log("yoo id is",id)
    await mutation.mutate(data,id)
  };
  
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormComp
            selectedTemplate={selectedTemplate}
            data={resumeDataById}
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
    </>
  );
}

export default FormProviderComp;
