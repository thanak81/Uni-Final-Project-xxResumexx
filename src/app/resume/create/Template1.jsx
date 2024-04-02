"use client";

import React from "react";
import { useStore } from "../state/GlobalState";
import ResumeStructure from "../components/templatess/CVTemplate/ParentTemplate/ResumeStructure";
import { Text } from "@radix-ui/themes";

function Template1() {
  const value = useStore((state) => state.value);

  return (
    <ResumeStructure>
      <div className="flex flex-col py-5 gap-2">
        <Text className="self-center">Thanak Mech</Text>
        <Text>{value}</Text>
      </div>
    </ResumeStructure>
  );
}

export default Template1;
