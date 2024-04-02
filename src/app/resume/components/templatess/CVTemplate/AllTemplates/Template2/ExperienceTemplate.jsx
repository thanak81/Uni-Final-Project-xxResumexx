import React from "react";

function ExperienceTemplate({ data }) {
  return (
    <>
      <div className=" font-bold text-[#005685] border-y border-black/25 p-2">
        Experience
      </div>
      {data.work?.length > 0 && (
        <div>
          <div className="py-2 px-5 flex flex-col gap-3">
            {data?.work.map((wo) => (
              <div key={wo.id}>
                <div className="flex justify-between">
                  <div className="font-bold">{wo.name}</div>
                  <div>
                    <span>{wo.startDate}</span>-<span>{wo.endDate}</span>
                  </div>
                </div>
                <div className="text-sm flex flex-col gap-2 text-[#56606A]">
                  <div className="mt-2 font-semibold">{wo.position}</div>
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
                  <div>
                    <span className="font-bold text-black">Summary :</span>{" "}
                    {wo.summary}
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

export default ExperienceTemplate;
