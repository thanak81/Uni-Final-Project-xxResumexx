import ResumePDFTemplate from "@/app/components/PDF/ResumePDFTemplate";
import { cn } from "@/app/util/cn";
import Image from "next/image";
import React from "react";
import PDFTemplate1 from "../PDFTemplate1/PDFTemplate1";

function BasicsTemplate({ resumeData, margin, line }) {
  let resumeLocal = {
    name: "Ronaldo JR",
    phone: "0123456789",
    summary: "I am a student",
    address: "Phnom Penh, Cambodia",
    email: "ronaldojr@gmail.com",
  };

  const resumeWatch = resumeData?.data?.basics;
  return (
    <div
      className={cn(
        `text-black pt-10 h-full flex  items-center justify-center gap-5`
      )}
    >

      {resumeWatch?.img.length !== 0 ? (
        <div className="ml-[120px] mb-5">
          <Image
            src={resumeWatch?.img[0]? resumeWatch.img[0] : ""}
            width={170}
            height={170}
            className="rounded-full"
            alt="ResumeIMG"
          />
        </div>
      ) : (
        ""
      )}

      <div className={`${resumeWatch?.img.length !== 0 ? "mr-[150px]" : ""}`}>
        <div className="text-2xl font-bold  text-center">
          {resumeWatch.name ? resumeWatch?.name : resumeLocal?.name}
        </div>
        <div className={cn(margin)}>
          <div className={cn("text-center px-5 text-sm ", line)}>
            {resumeWatch.summary ? resumeWatch?.summary : ""}
          </div>
          <div>
            <div className="text-center  text-sm">
              <span>
                {" "}
                {resumeWatch.phone ? resumeWatch?.phone : resumeLocal?.phone}
              </span>
              <span> | </span>
              <span>
                {" "}
                {resumeWatch.email ? resumeWatch?.email : resumeLocal?.email}
              </span>
              <div>
                <div>
                  {" "}
                  {resumeWatch.address
                    ? resumeWatch?.address
                    : resumeLocal?.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicsTemplate;
