import React, { useState } from "react";
import ExperienceTemplate from "./ExperienceTemplate";
import EducationTemplate from "./EducationTemplate";
import Skeleton from "../../../../Skeleton";
import SkillTemplate from "./SkillTemplate";
import BasicsTemplate from "./BasicsTemplate2";

function PersonalTemplate({ data, isLoading, error }) {
  // const [datas, setDatas] = useState(data);

  if (error) return <div>There was an error while fetching data</div>;
  if (isLoading) return;
  return (
    <>
      {isLoading && <Skeleton />}
      <div className="flex flex-col py-5 gap-2 h-full">
        <BasicsTemplate data={data} />
        <ExperienceTemplate data={data} />
        <EducationTemplate data={data} />
        <SkillTemplate data={data} />
      </div>
    </>
  );
}

export default PersonalTemplate;
