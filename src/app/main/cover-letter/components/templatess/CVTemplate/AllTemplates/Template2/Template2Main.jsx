import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import BasicsTemplate from "./BasicsTemplate2";
function Template2Main() {
  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });

  return (
    <div className="flex h-full border">
      <div className=" h-[297mm] w-[30%] bg-slate-800">
        <BasicsTemplate resumeData={resumeData} />
      </div>
      <div className="w-[35rem]">
        <div className=" text-black p-5 w-full ">
          {resumeData.data.basics.summary}
          {/* {data.basics?.summary
            ? data.basics?.summary
            : "        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  fugiat blanditiis dicta reiciendis placeat ab praesentium vero doloribus! Eaque quod omnis a dolorem repellat provident ab officiis totam, optio ut."} */}
        </div>
      </div>
    </div>
  );
}

export default Template2Main;
