import React, { useState } from "react";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import Skeleton from "../../../../Skeleton";
import SkillTemplate from "./SkillTemplate";
import BasicsTemplate from "./BasicsTemplate";

function PersonalTemplate({ data, isLoading, error }) {
  const [datas, setDatas] = useState(data);

  if (error) return <div>There was an error while fetching data</div>;
  if (isLoading) return;
  return (
    <>
      {isLoading && <Skeleton />}

      {/* 
        {data.languages?.length > 0 ? (
          <div className="flex flex-col gap-5 ">
            <div className="bg-[#003F6C] font-bold p-2">Languages</div>
            <div className="flex flex-col gap-5 px-5 pb-5 text-sm">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <div className="text-wrap">
                    {data.skills.name ? data.skills.name : "English"}
                  </div>
                  <div>Rate 5</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )} */}
      <div className="flex flex-col py-5 gap-2">
        <BasicsTemplate data={datas} />
        <ExperienceTemplate data={datas} />
        <EducationTemplate data={datas} />
        <SkillTemplate data={datas} />
      </div>
    </>
  );
}

export default PersonalTemplate;
