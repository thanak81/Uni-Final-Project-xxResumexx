"use client";

import { useCompletion } from "ai/react";

import React, { useEffect, useState } from "react";
import { Input, Snippet, Spinner } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
// import { aiCheckState, aiData, checkGrammar } 
import { aiCheckState, aiData, checkGrammar } from "../../resume/state/GlobalState";
import { useFormContext, useWatch } from "react-hook-form";
import parse from "html-react-parser";

function BardCover({ width, enableCompletion, aiForm, editor }) {
  const grammar = checkGrammar((state) => state.value);

  console.log("sentence", grammar);
  const setData = aiData((state) => state.setValue);
  const datas = aiData((state) => state.value);
  const [aiContent, setAiContent] = useState("");
  const setGrammar = checkGrammar((state) => state.setValue);
  const { control } = useFormContext();
  const coverLetterWatch = useWatch({
    control,
  });
  console.log("coverletter watch",coverLetterWatch)
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
    if (coverLetterWatch.data.letter.summary) {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = coverLetterWatch.data.letter.summary;

      // Convert HTML content to plain text
      const plainText = tempElement.innerText;

      // Set plain text as the input value
      setInput(plainText);
      // console.log("lol",parsedSummary);
    }
    if (completion && aiForm && isLoading) {
      setData(completion);
      console.log("datacover", completion)
    // editor.commands.setTextSelection(completion)
      editor.commands.setContent(completion);
      // to enable live preview since setContent does not trigger re-render
      editor.chain().focus().insertContent(" ").run();
    }
  }, [
    editor,
    completion,
    setData,
    setInput,
    coverLetterWatch.data.letter.summary,
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

console.log(completion)
  return (
    <div
      className={`flex gap-3 justify-between items-center ${
        width ? width : "w-full"
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
      <div className="flex gap-3 ">
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
              {/* <Spinner /> */}
            </small>
          )}
      {/* {completion && (
        <div>
        
          <small
            onClick={() =>
              editor.chain().focus().insertContent(completion).run()
            }
          >
            Click here to insert content
          </small>

          <div
            className="rounded-xl w-full bg-[#212121] h-[21rem]  text-white p-2  overflow-y-auto"
          >
            {completion}
          </div>
        </div>
      )} */}
    </div>
  );
}

export default BardCover;
