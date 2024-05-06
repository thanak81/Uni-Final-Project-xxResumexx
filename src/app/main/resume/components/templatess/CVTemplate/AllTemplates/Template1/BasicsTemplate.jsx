import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
function BasicsTemplate({ resumeData, resumeDataLocal }) {
  let resumeLocal = {
    name: "Ronaldo JR",
    phone: "0123456789",
    summary: "I am a student",
    address : "Phnom Penh, Cambodia",
    email : "ronaldojr@gmail.com"
  };

  // if (resumeDataLocal) {
  //   resumeLocal = resumeDataLocal?.data.basics;
  // }

  console.log(resumeLocal);
  const resumeWatch = resumeData.data.basics;

  return (
    <div className="text-black pt-10 h-full">
      <div className="text-2xl font-bold pb-3 text-center">
        {resumeWatch.name ? resumeWatch?.name : resumeLocal?.name}
      </div>
      <div className="text-justify px-5 pb-3">
        {resumeWatch.summary ? resumeWatch?.summary : resumeLocal?.summary}
      </div>
      <div>
        <div className="text-center px-5 pb-5 text-sm">
          <span>
            {" "}
            {resumeWatch.phone ? resumeWatch?.phone : resumeLocal?.phone}
          </span>
          <span>|</span>
          <span>
            {" "}
            {resumeWatch.email ? resumeWatch?.email : resumeLocal?.email}
          </span>
          <div>
            <div>
              {" "}
              {resumeWatch.address ? resumeWatch?.address : resumeLocal?.address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicsTemplate;
