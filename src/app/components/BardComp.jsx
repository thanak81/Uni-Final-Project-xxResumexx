"use client";

import { useCompletion } from "ai/react";

import React from "react";
import { Input, Snippet } from "@nextui-org/react";
import { Button } from "@radix-ui/themes";

function BardComp() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 justify-between w-[18rem]"
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
        <Button className="cursor-pointer" type="submit">
          Ask
        </Button>
      </div>
      {completion && (
        <>
          <small>Click on text to copy</small>

          <div
            className="rounded-xl text-sm bg-[#212121] h-[21rem] font-semibold text-white p-2  overflow-y-auto"
            onClick={() => {
              navigator.clipboard.writeText(completion);
            }}
          >
            {completion}
          </div>
        </>
      )}
    </form>
  );
}

export default BardComp;
