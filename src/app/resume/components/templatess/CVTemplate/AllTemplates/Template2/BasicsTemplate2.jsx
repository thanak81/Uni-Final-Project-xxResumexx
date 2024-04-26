import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
function BasicsTemplate({resumeData}) {

  return (
      <div className="text-white pt-10 pb-5">
        <div className="text-2xl font-bold text-center">{resumeData.basics.name? resumeData.basics.name :"Thanak Mech"}</div>
        <div className="text-center">Student</div>
        <div className="gap-5">
          <div className="text-center px-5 pb-5 text-sm">
              <span> {resumeData.basics.number? resumeData.basics.number : "081790154"}</span>
              <span>|</span>
              <span> {resumeData.basics.email ? resumeData.basics.email : "thanakmech@gmail.com"}</span>
            <div>
              <div> {resumeData.basics.email.address}</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default BasicsTemplate;
