import React from "react";
import parse from "html-react-parser";

function ExperienceTemplate({ resumeData }) {
  console.log("workdata",resumeData)
  const data = {
    work: [
      {
        id: 1,
        name: "Heineken",
        startDate: "2021",
        endDate: "2023",
        position: "Intern",
        summary: "I intern there for 3 months",
      },
    ],
  };
  let checked = false;
  if (
    resumeData.data.work[0]
  ) {
    checked = true;
  } else {
    checked = false;
  }

  return (
    <>
      {resumeData?.data.work?.length >= 0 && checked && (
        <div>
          <div className=" font-bold text-[#005685] border-y border-black/25 p-2">
            Experience
          </div>
          <div className="py-2 px-5 flex flex-col gap-3 text-black">
            {resumeData.data.work.map((wo) => (
              <div key={wo.id}>
                <div className="flex justify-between">
                  <div className="font-bold w-[40rem]">{wo.company}</div>
                  <div>
                    <span>{wo.startYear}</span>-
                    {wo.present ? (
                      <span>Present</span>
                    ) : (
                      <span>{wo.endYear}</span>
                    )}
                  </div>
                </div>
                <div className="text-sm flex flex-col gap-2 text-[#56606A]">
                  <div className="mt-2 font-semibold w-[40rem]">
                    {wo.position}{" "}
                  </div>
                  {/* <ul className="list-disc list-inside text-justify">
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus quos asperiores pariatur illo tempora dolores
                        eaque voluptate quibusdam, delectus adipisci ipsum porro
                        ex consequatur rem temporibus omnis consectetur, beatae
                        quidem.
                      </li>
                      <li>Create AR Ar Game</li>
                      <li>Create AR Ar Game</li>
                      <li>Create AR Ar Game</li>
                      <li>Create AR Ar Game</li>
                      <li>Create AR Ar Game</li>
                    </ul> */}
                  <div className="w-[40rem] prose">
                    {wo?.summary && parse(wo.summary)}
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ExperienceTemplate;
