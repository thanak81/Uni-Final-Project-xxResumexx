import React, { Fragment } from "react";
import parse from "html-react-parser";
import { cn } from "@/app/util/cn";

function CustomTemplate({ resumeData, line }) {
  return (
    <>
      {resumeData.data.custom && (
        <div className="flex flex-col">
          {resumeData.data.custom.map((cus) => (
            <Fragment key={cus}>
              <div className=" font-bold text-[#005685] border-y border-black/25 p-2">
                {cus.heading ? cus.heading : "Custom"}
              </div>
              <div
                className={cn(
                  "prose marker:text-black [&_ul]:text-black list-disc px-5  text-black max-w-full text-justify text-sm",
                  line
                )}
              >
                {cus?.summary && parse(cus.summary)}
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
}

export default CustomTemplate;
