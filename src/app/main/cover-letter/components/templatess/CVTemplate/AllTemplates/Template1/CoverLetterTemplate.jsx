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
    <div className="prose text-black list-disc text-sm max-w-full text-justify break-words">
      <div className="font-bold text-black mb-5">{coverWatch.profile.date}</div>
      <div className="font-bold text-black mb-5">
        {coverWatch.employee.company}
      </div>
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
            ? coverLetterById.payload.data.letter.summary : ""
        }
      />
    </div>
  );
}

export default CoverLetterTemplate;
