"use client";

import { useCompletion } from "ai/react";

import React, { useEffect, useState } from "react";
import { Input, Snippet, Spinner } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import { aiCheckState, aiData, checkGrammar } from "../main/resume/state/GlobalState";
import { useFormContext, useWatch } from "react-hook-form";
import parse from "html-react-parser";

function BardGeneral({ width, aiForm, editor }) {
  
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
        title: "general"
      }
  });

 console.log(completion)
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
      <Button className="cursor-pointer" loading={isLoading} onClick={handleSubmit}>Click</Button>
      <div className="self-end justify-end"></div>
   
      {completion && (
        <div>
          {/* <input value={data} onChange={(e) => setData(e.target.value)} /> */}
        
          <small>
            Click here to copy content
          </small>

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

export default BardGeneral;
