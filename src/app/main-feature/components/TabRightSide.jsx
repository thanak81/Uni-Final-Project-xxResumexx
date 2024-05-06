"use client";

import BardComp from "@/app/components/BardComp";
import ProgressCard from "@/app/main/resume/components/ProgressCard";
import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
function TabRightSide({ onSubmit, data, handleTemplate, printResume }) {
  return (
    <div>
      <Tabs size="sm" aria-label="Options" color="primary">
        <Tab key="progress_card" title="Progress Card">
          <ProgressCard
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
      </Tabs>
    </div>
  );
}

export default TabRightSide;
