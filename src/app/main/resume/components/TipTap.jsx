"use client";

import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { aiData, checkGrammar, useActive, useStore } from "../state/GlobalState";
import ToolBar from "./ToolBar";
import { useFormContext, useWatch } from "react-hook-form";
import Placeholder from "@tiptap/extension-placeholder";
import { cn } from "@/app/util/cn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { AutoCompleteNode } from "@/app/util/customExtension";
// import {z} from "zod"
const Tiptap = ({ value, data }) => {
  const active = useActive((state) => state.activeRight);
  const setGrammar = checkGrammar((state)=>state.setValue)
  const grammar = checkGrammar((state) => state.value);

  const { register, setValue ,getValues } = useFormContext();
  // let sentence="" ;
  const [sentence,setSentence]= useState("")
  const { theme } = useTheme();
  const datas = aiData((state) => state.value);

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Placeholder.configure({
        placeholder: "Summary",
      }),
    ],
    content: data,
    editorProps: {
      attributes: {
        class:
          // `prose px-5 prose-sm prose-zinc min-h-[150px]  rounded  border border-[#71717A] overflow-y-scroll dark:prose-invert focus:border-white focus:outline-none [&_*]:my-2`,
          //Width size is fixed becouse the default width is too big
          cn(
            ` px-5 text-black [&_strong]:text-black border-2 border-blue-500 [&_ol]:list-decimal  [&_ul]:list-disc bg-white/2 prose-sm prose-zinc min-h-[150px] max-h-[300px] rounded text-black overflow-y-scroll dark:prose-invert focus:border-green-500 focus:outline-none [&_*]:my-2`,
            {
              "bg-white": theme === "dark",
            }
          ),
        // "prose rounded-md min-w-full max-w-96 text-white border list-desc  min-h-[150px]  text-white border border-[#71717A] text-sm focus:outline-none focus:border-white",
      },
    },
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setValue(value, html);
  
    },
  });
  // setGrammar(parse(resumeWatch.data.profile.summary));
  // console.log("lol",resumeWatch.data.profile.summary)
  return (
    <div className="w-full">
      <ToolBar editor={editor} datas={datas}/>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
