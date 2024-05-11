import React from "react";
import parse from "html-react-parser";
import { cn } from "@/util/cn";
function ProfileTemplate({ resumeData , line}) {
  return (
    resumeData.data.profile && (
      <div className= {cn("prose px-5 mb-5 text-black max-w-full text-justify text-sm",line)}>
        {resumeData?.data?.profile?.summary &&
          parse(resumeData?.data?.profile?.summary)}
      </div>
    )
  );
}

export default ProfileTemplate;
