"use client";

import BardComp from "@/app/components/BardComp";
import ProgressCard from "@/app/main/resume/components/ProgressCard";
import { Card, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
function TabRightSide({
  onSubmit,
  data,
  handleTemplate,
  printResume,
  margin,
  setMargin,
  line,
  setLine
}) {
  return (
    <div>
      <Tabs size="sm" aria-label="Options" color="primary">
        <Tab key="progress_card" title="Progress Card">
          <ProgressCard
            line = {line}
            setLine={setLine}
            setMargin={setMargin}
            margin={margin}
            printResume={printResume}
            onSubmit={onSubmit}
            data={data}
            handleTemplate={handleTemplate}
          />
        </Tab>
        <Tab key="ai" title="AI">
          <div className="w-full">
            <BardComp />
          </div>
        </Tab>
        <Tab key="template" title="Template">
          <div className="w-[18rem] flex gap-4 flex-col">
            <div>Template</div>
            <div className="grid grid-cols-2 gap-2">
              {data.map((dat) => (
                <Card radius="sm" isHoverable key={dat.id}>
                  <Image
                    onClick={() => handleTemplate(data[dat.id - 1])}
                    src={dat.img}
                    className="object-cover cursor-pointer"
                    alt={dat.name}
                    width={350}
                    height={100}
                  />
                </Card>
              ))}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabRightSide;
