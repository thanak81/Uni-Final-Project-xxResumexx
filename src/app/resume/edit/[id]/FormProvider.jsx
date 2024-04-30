import React from "react";
import FormComp from "./Form";
import { FormProvider, useForm } from "react-hook-form";
import ProgressCard from "../../components/ProgressCard";

function FormProviderComp({id,mutation , data,handleTemplate, selectedTemplate, resumeDataById, printRef }) {
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
    // if (active) {
    //   handlePrint();
    // }
    await mutation.mutate(data,id)
    // await createResume(data);
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
          onSubmit={methods.handleSubmit(onSubmit)}
          data={data}
          handleTemplate={handleTemplate}
        />
      </div>
    </>
  );
}

export default FormProviderComp;
