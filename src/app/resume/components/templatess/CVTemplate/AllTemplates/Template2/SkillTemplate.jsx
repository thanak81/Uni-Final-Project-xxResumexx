import React from "react";

function SkillTemplate({ data }) {
  return (
    <>
      {" "}
      <div>
        <div className=" font-bold text-[#005685] border-y border-black p-2">Skills</div>
        <div className="p-5">
        <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 px-5 pb-5 text-sm">
                <ul className="flex flex-col gap-5 list-disc">
                  {data?.skills?.map((skill) => {
                    return (
                      <li key={skill.name}>
                        <div className="font-bold">{skill.name ? skill.name : "Skill Name"}</div>
                        {skill.skill?.length > 0 && (
                          <ul className="list-disc pl-5">
                            {skill.skill?.map((skill_list) => {
                              return <li key={skill_list}>{skill_list}</li>;
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default SkillTemplate;
