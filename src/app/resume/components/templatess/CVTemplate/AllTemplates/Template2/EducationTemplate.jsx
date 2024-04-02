import React from "react";

function EducationTemplate({ data }) {
  return (
    <>
      <div className=" font-bold text-[#005685] border-y p-2">Education</div>
      {data?.education?.length > 0 && (
        <div>
          <div className="p-5 flex flex-col gap-5">
            {data?.education.map((edu) => (
              <div key={edu.id} className="">
                <div className="flex justify-between">
                  <div className="font-bold">{edu.institution}</div>
                  <div>
                    <span>{edu.startDate}</span>-<span>{edu.endDate}</span>
                  </div>
                </div>
                <div className="text-sm flex flex-col gap-2 text-[#56606A]">
                  <div className="mt-2 font-semibold">
                    {edu.level}, {edu.area}
                  </div>
                  <div>
                    <span className="font-bold text-black">Summary :</span>{" "}
                    {edu.summary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default EducationTemplate;
