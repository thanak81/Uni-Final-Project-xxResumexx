import React, { Fragment } from "react";

function SkillTemplate({ resumeData }) {
  let checked = false;
  if (resumeData.data.skills) {
    checked = true;
  } else {
    checked = false;
  }

  return (
    <>
      {resumeData?.data.skills?.length > 0 && checked && (
        <div>
          <div className=" font-bold text-[#005685] border-y border-black/25 p-2">
            Skills
          </div>
          <div className="p-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 px-5  text-sm">
                <ul className="flex flex-col gap-5  list-disc text-black">
                  {resumeData.data.skills?.map((skill) => {
                    return (
                      <Fragment key={skill.name}>
                        <li>{skill.name}</li>
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SkillTemplate;
