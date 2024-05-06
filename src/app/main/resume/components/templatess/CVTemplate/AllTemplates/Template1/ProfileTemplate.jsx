import React from "react";
import parse from "html-react-parser";
function ProfileTemplate({ resumeData }) {
  return (
    resumeData.data.profile && (
      <div className="prose px-5 mb-5 text-black max-w-full text-justify text-sm">
        {resumeData?.data?.profile?.summary &&
          parse(resumeData?.data?.profile?.summary)}

      </div>
    )
  );
}

export default ProfileTemplate;
