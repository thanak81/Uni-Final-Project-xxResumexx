"use client";

import { useCompletion } from "ai/react";

import React, { useEffect, useState } from "react";
import { Input, Snippet, Spinner } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import { aiCheckState, aiData, checkGrammar } from "../main/resume/state/GlobalState";
import { useFormContext, useWatch } from "react-hook-form";
import parse from "html-react-parser";

function BardComp({ width, enableCompletion, aiForm, editor }) {
  const grammar = checkGrammar((state) => state.value);

  console.log("sentence", grammar);
  const setData = aiData((state) => state.setValue);
  const datas = aiData((state) => state.value);
  const [aiContent, setAiContent] = useState("");
  const setGrammar = checkGrammar((state) => state.setValue);
  const { control } = useFormContext();
  const resumeWatch = useWatch({
    control,
  });
  // const [trackAiState, setTrackAiState] = useState("");
  const setTrackAiState = aiCheckState((state)=>state.setValue)
  const checkAiState = aiCheckState((state) => state.value);

  const {
    completion,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useCompletion({
    api: "/api/completion",
    body: {
      title: checkAiState ||  "" 
    }
  });

  useEffect(() => {
    // setGrammar(parse(resumeWatch.data.profile.summary));
    if (resumeWatch.data.profile.summary) {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = resumeWatch.data.profile.summary;

      // Convert HTML content to plain text
      const plainText = tempElement.innerText;

      // Set plain text as the input value
      setInput(plainText);
      // console.log("lol",parsedSummary);
    }
    if (completion && aiForm && isLoading) {
      setData(completion);
      editor.commands.setContent(completion);
      // to enable live preview since setContent does not trigger re-render
      editor.chain().focus().insertContent(" ").run();
    }
  }, [
    completion,
    setData,
    setInput,
    resumeWatch.data.profile.summary,
    aiForm,
    isLoading,
  ]);

  const aiState = [
    {
      id: 1,
      title: "generateContent",
      label: "Generate Content",
    },
    {
      id: 2,
      title: "fixedGrammar",
      label: "Fix Grammar",
    },
  ];

  // console.log("track", trackAiState);


  return (
    <div
      className={`flex flex-col gap-3 justify-between ${
        width ? width : "w-[18rem]"
      }`}
    >
      {/* <Input
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
      /> */}
      <div className="self-end justify-end"></div>
      {/* <Button onClick={handleSubmit}>Fixed Grammar</Button> */}
      <div className="flex gap-3">
        {aiState.map((ai) => (
          <div key={ai.id}>
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setTrackAiState(ai.title);
                handleSubmit(e);
              }}
              className="cursor-pointer"
            >
              {ai.label}
            </Button>
          </div>
        ))}
      </div>
      {isLoading && (
            <small>
              Generating ......
              <Spinner />
            </small>
          )}
      {completion && (
        <div>
          {/* <input value={data} onChange={(e) => setData(e.target.value)} /> */}
        
          <small
            onClick={() =>
              editor.chain().focus().insertContent(completion).run()
            }
          >
            Click here to insert content
          </small>

          <div
            className="rounded-xl w-full bg-[#212121] h-[21rem]  text-white p-2  overflow-y-auto"
            // onClick={() => {
            //   navigator.clipboard.writeText(completion);
            // }}
          >
            {completion}
          </div>
        </div>
      )}
    </div>
  );
}

export default BardComp;
