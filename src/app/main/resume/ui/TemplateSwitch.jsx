"use client";
import React, { useState } from "react";
import { Heading, Text, Button } from "@radix-ui/themes";
function TemplateSwitch({data,handleTemplate}) {
  return (
    <div>
      <Text>Choose Resume</Text>
      <div className="flex flex-col items-center mt-2 gap-5">
        {data.map((dat) => {
          return (
            <div key={dat.id}>
              <Button onClick={() => handleTemplate(data[dat.id - 1])}>
                {dat.name}
              </Button>
            </div>
          );
        })}
      </div>

      {/* <ResumeStructure>{selectedTemplate.template}</ResumeStructure> */}
    </div>
  );
}

export default TemplateSwitch;
