"use client"
import React, { useRef } from "react";
import BasicsTemplate from "./BasicsTemplate";
import { useFormContext, useWatch } from "react-hook-form";
import CoverLetterTemplate from "./CoverLetterTemplate";

function Template1Main({coverLetterById}) {

  const { control } = useFormContext();
  const coverData = useWatch({
    control,
  });
  let autoSaveData;
  if (typeof window !== "undefined") {
    autoSaveData = JSON.parse(localStorage.getItem("autoSavedCoverLetterData"));
  }
  return (
    <div>
       <div className="p-5 w-full">
      <BasicsTemplate coverData={coverData} />
      <CoverLetterTemplate coverData={coverData} autoSaveData={autoSaveData}  coverLetterById={coverLetterById}/>
      {/* <ExperienceTemplate coverData={coverData}  resumeDataLocal={resumeDataLocal}/> */}
    </div>
          <div className="my-5 w-full border border-black/25"></div>

    </div>
 
  );
}

export default Template1Main;
