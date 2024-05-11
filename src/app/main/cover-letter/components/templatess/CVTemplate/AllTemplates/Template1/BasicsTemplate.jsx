import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
function BasicsTemplate({ coverData}) {
  let coverLocal = {
    name: "Ronaldo JR",
    phone: "0123456789",
    summary: "I am a student",
    address: "Phnom Penh, Cambodia",
    email: "ronaldojr@gmail.com",
  };

  // if (resumeDataLocal) {
  //   resumeLocal = resumeDataLocal?.data.basics;
  // }

  const coverWatch = coverData.data.profile;

  return (
    <>
      <div className="text-black pt-5  pb-5 h-full">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold text-left w-[25rem]">
            {coverWatch.name ? coverWatch?.name : coverLocal?.name}
          </div>
          <div className="text-right">
            <div>{coverWatch.phone? coverWatch?.phone: coverLocal?.phone}</div>
            <div>{coverWatch.address? coverWatch?.address: coverLocal?.address}</div>
            <div>{coverWatch.email? coverWatch?.email: coverLocal?.email}</div>
          </div>
        </div>
      </div>
      <div className="my-5 w-full border border-black/25"></div>
    </>
  );
}

export default BasicsTemplate;
