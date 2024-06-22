"use client";
import React, { useState } from "react";
import parse from "html-react-parser";
import Tiptap from "../../../../TipTap";
import { usePathname } from "next/navigation";

function CoverLetterTemplate({ coverData, autoSaveData, coverLetterById }) {
  const coverWatch = coverData.data;
  const pathName = usePathname();
  let check;
  if (pathName.startsWith("/main/cover-letter/edit")) {
    check = true;
  }
  return (
    <div className=" text-sm max-w-full text-justify break-words relative">
      {coverWatch.profile.date && (
        <div className="font-bold text-black my-2.5">
          {coverWatch.profile.date}
        </div>
      )}
      {coverWatch.employee.company && (
        <div className="font-bold text-black my-5">
          {coverWatch.employee.company}
        </div>
      )}
        {coverWatch.employee.hiringManager && (
            <div className="py-1 pb-0 text-black my-2.5">{coverWatch.employee.hiringManager}</div> 

      )}

      {/* <div className="w-full">{parse(coverWatch.letter.summary)}</div> */}
      <Tiptap
        value={"data.letter.summary"}
        // data={
        //   autoSaveData?.data?.letter?.summary
        //     ? autoSaveData?.data?.letter?.summary
        //     : ""
        // }
        data={
          !check
            ? autoSaveData?.data?.letter?.summary
            : coverLetterById.payload.data.letter.summary
            ? coverLetterById.payload.data.letter.summary
            : ""
        }
      />
    </div>
  );
}

export default CoverLetterTemplate;
