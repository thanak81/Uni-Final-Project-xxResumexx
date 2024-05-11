import { cn } from "@/util/cn";
import React from "react";

function BasicsTemplate({ resumeData, margin}) {
  let resumeLocal = {
    name: "Ronaldo JR",
    phone: "0123456789",
    summary: "I am a student",
    address : "Phnom Penh, Cambodia",
    email : "ronaldojr@gmail.com"
  };

  const resumeWatch = resumeData.data.basics;
  console.log("basic Margin", margin)
  return (
    <div className={cn(`text-black pt-10 h-full`,margin)}>
      <div className="text-2xl font-bold  text-center">
        {resumeWatch.name ? resumeWatch?.name : resumeLocal?.name}
      </div>
      <div className="text-center text-sm">
        {resumeWatch.summary ? resumeWatch?.summary : resumeLocal?.summary}
      </div>
      <div>
        <div className="text-center  text-sm">
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
