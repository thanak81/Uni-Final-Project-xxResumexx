import React, { Fragment } from "react";

function LanguageTemplate({ resumeData }) {
  let checked = false;
  if (resumeData.data.language) {
    checked = true;
  } else {
    checked = false;
  }

  return (
    <>
      {resumeData?.data.language?.length > 0 && checked && (
        <div>
          <div className=" font-bold text-[#005685] border-y border-black/25 p-2">
            Languages
          </div>
          <div className="p-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 px-5  text-sm">
                <ul className="flex flex-col gap-5  list-disc text-black">
                  {resumeData.data.language?.map((lan) => {
                    return (
                      <Fragment key={lan.name}>
                        <li className="flex justify-between">
                          <li> {lan.name}</li>
                          <span> {lan.fluency}</span>
                        </li>
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

export default LanguageTemplate;
