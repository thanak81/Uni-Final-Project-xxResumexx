import { HKFont, RobotoFont } from "@/app/fonts";
import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import React, { Fragment } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import parse from "html-react-parser";
import { cn } from "@/app/util/cn";

function Template3Main() {
  const { control } = useFormContext();
  const resumeData = useWatch({
    control,
  });
  return (
    <div className={HKFont.className}>
      <div className={`text-black pt-10 pb-5 px-[50px] w-full h-full`}>
        <div className="text-center uppercase leading-relaxed ">
          <div className="text-[30px] text-[#575757] font-bold tracking-widest">
            {resumeData.data.basics.name
              ? resumeData.data.basics.name
              : "Thanak Mech"}
          </div>
          <div className={RobotoFont.className}>
            <div className={`text-[12px]`}>
              {resumeData.data.basics.summary}
            </div>
          </div>

          <div className="border-b-[2px] mt-5 border-[#575757]"></div>
        </div>
        <div className="flex h-[297mm]">
          <div className="bg-[#F8F8F8] py-5 px-5 col-span-2 w-[30rem] ">
            <div className="flex flex-col gap-4">
              <div className="uppercase tracking-widest font-bold">Contact</div>
              {resumeData.data.basics.phone && (
                <div className="text-sm flex gap-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  <div className="w-[80%]">{resumeData.data.basics.phone}</div>
                </div>
              )}
              {resumeData.data.basics.email && (
                <div className="text-sm flex gap-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="w-[80%]">{resumeData.data.basics.email}</div>
                </div>
              )}
              {resumeData.data.basics.address && (
                <div className="text-sm flex gap-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div className="w-[80%]">
                    {resumeData.data.basics.address}
                  </div>
                </div>
              )}
            </div>
            {resumeData.data.skills.length > 0 && (
              <Fragment>
                <div className="border-dotted border-b-[4px] mb-5 border-[#575757] mt-5"></div>
                <div className="flex flex-col gap-4">
                  <div className="uppercase tracking-widest font-bold">
                    Skills
                  </div>
                  <div className={RobotoFont.className}>
                    <div className="text-sm flex flex-col gap-4 items-start">
                      {resumeData.data.skills.map((skill) => (
                        <div className="w-[100%]" key={skill.name}>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
            {resumeData.data.education.length > 0 && (
              <Fragment>
                <div className="border-dotted border-b-[4px] mb-5 border-[#575757] mt-5"></div>
                <div className="flex flex-col gap-4">
                  <div className="uppercase tracking-widest font-bold">
                    Education
                  </div>
                  <div className="text-sm flex flex-col gap-4">
                    {resumeData.data.education.map((edu) => (
                      <div
                        key={edu.institution}
                        className="flex flex-col gap-2"
                      >
                        <div className="w-full font-bold text-[12px]">
                          {edu.level}
                        </div>
                        <div className="w-full font-semibold text-[14px]">
                          {edu.area}
                        </div>

                        <div className="w-full font-bold text-[18px]">
                          {edu.institution}
                        </div>
                        <div className="w-full py-2">
                          <span>{edu.startYear}</span> -{" "}
                          {edu.present ? (
                            <span>Present</span>
                          ) : (
                            <span>{edu.endYear}</span>
                          )}
                        </div>
                        <div className="w-full prose marker:text-black  text-black text-sm ">
                          {edu?.summary && parse(edu.summary)}
                        </div>
                      </div>
                    ))}
                  </div>
                  {resumeData.data.custom.length > 0 && (
                    <Fragment>
                      <div className="border-dotted border-b-[4px] mb-5 border-[#575757] mt-5"></div>
                      <div className="flex flex-col gap-4">
                        {resumeData.data.custom.map((cus) => (
                          <Fragment key={cus.id}>
                            <div className="uppercase tracking-widest font-bold">
                              {cus.heading ? cus.heading : "Custom"}
                            </div>
                            <div
                              className={cn(
                                "prose marker:text-black [&_ul]:text-black list-disc px-5  text-black max-w-full text-justify text-sm"
                              )}
                            >
                              {cus?.summary && parse(cus.summary)}
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </Fragment>
                  )}
                </div>
              </Fragment>
            )}

            {resumeData.data.language.length > 0 && (
              <Fragment>
                <div className="border-dotted border-b-[4px] mb-5 border-[#575757] mt-5"></div>
                <div className="flex flex-col gap-4">
                  <div className="uppercase tracking-widest font-bold">
                    Languages
                  </div>
                  <div className={RobotoFont.className}>
                    <div className="text-sm flex flex-col gap-4 items-start">
                      {resumeData.data.language.map((lan) => (
                        <div
                          className="w-[100%] flex justify-between"
                          key={lan.name}
                        >
                          <div>{lan.name}</div>
                          <div>{lan.fluency}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className="col-span-3 py-5 px-5 w-full">
            {resumeData.data.profile && (
              <div className="flex flex-col gap-4">
                <div className="uppercase tracking-widest font-bold ">
                  Profile
                </div>
                <div className="prose marker:text-black pb-2 text-black text-sm text-wrap">
                  {resumeData?.data?.profile?.summary &&
                    parse(resumeData?.data?.profile?.summary)}
                </div>
              </div>
            )}
            {resumeData.data.work.length > 0 && (
              <Fragment>
                <div className="border-dotted border-b-[4px] mb-5 border-[#575757] mt-5"></div>
                <div className="flex flex-col gap-4">
                  <div className="uppercase tracking-widest font-bold ">
                    WORK EXPERIENCE
                  </div>
                  <div className="flex flex-col gap-4">
                    {resumeData.data.work.map((wo) => (
                      <div key={wo.id}>
                        <div className="w-full font-bold text-[18px]">
                          {wo.position}
                        </div>
                        <div className="flex justify-between py-2">
                          <div className="font-semibold">{wo.company}</div>
                          <div>
                            <span>{wo.startYear}</span>-
                            {wo.present ? (
                              <span>Present</span>
                            ) : (
                              <span>{wo.endYear}</span>
                            )}
                          </div>
                        </div>
                        <div className="prose marker:text-black text-black text-sm text-wrap">
                          {wo.summary && parse(wo.summary)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3Main;
