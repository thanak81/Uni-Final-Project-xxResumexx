"use client";

import { useCompletion } from "ai/react";

import React, { useEffect, useState } from "react";
import { Input, Snippet } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import { aiData, checkGrammar } from "../main/resume/state/GlobalState";
import { useFormContext, useWatch } from "react-hook-form";
import parse from "html-react-parser";

function BardComp({ width, enableCompletion, aiForm }) {
  const grammar = checkGrammar((state) => state.value);

  console.log("sentence", grammar);
  const setData = aiData((state) => state.setValue);
  const [aiContent, setAiContent] = useState("");
  const setGrammar = checkGrammar((state) => state.setValue);
  const { control } = useFormContext();
  const resumeWatch = useWatch({
    control,
  });

  const { completion, input, setInput, handleInputChange, handleSubmit } =
    useCompletion({
      api: "/api/completion",
    });

  useEffect(() => {
    // setGrammar(parse(resumeWatch.data.profile.summary));
    if (resumeWatch.data.profile.summary) {
      const tempElement = document.createElement('div');
  tempElement.innerHTML = resumeWatch.data.profile.summary;
  
  // Convert HTML content to plain text
  const plainText = tempElement.innerText;
  
  // Set plain text as the input value
  setInput(plainText);
    // console.log("lol",parsedSummary);
  }

    if (completion && aiForm) {
      setData(completion);
    }
  }, [
  
    completion,
  
    aiForm,
  ]);

  return (
    <div
      className={`flex flex-col gap-3 justify-between ${
        width ? width : "w-[18rem]"
      }`}
    >
      <Input
        radius="sm"
        className="w-full"
        name="prompt"
        key="inside"
        variant="bordered"
        labelPlacement="outside"
        value={input}
        placeholder="Ask bard for resume helper"
        onChange={handleInputChange}
        id="input"
      />
      <div className="self-end justify-end">
        <Button onClick={handleSubmit} className="cursor-pointer">
          Fixed Grammar
        </Button>
      </div>
      {/* <Button onClick={handleSubmit}>Fixed Grammar</Button> */}
      {completion && enableCompletion && (
        <div>
          {/* <input value={data} onChange={(e) => setData(e.target.value)} /> */}
          <small>Click on text to copy</small>

          <div
            className="rounded-xl w-full bg-[#212121] h-[21rem]  text-white p-2  overflow-y-auto"
            onClick={() => {
              navigator.clipboard.writeText(completion);
            }}
          >
            {completion}
          </div>
        </div>
      )}
    </div>
  );
}

export default BardComp;
