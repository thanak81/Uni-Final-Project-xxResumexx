"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useActive, useStore } from "../state/GlobalState";
import ToolBar from "./ToolBar";
import { useFormContext } from "react-hook-form";
import Placeholder from "@tiptap/extension-placeholder";
// import {z} from "zod"
const Tiptap = ({ value }) => {
  const active = useActive((state) => state.active);
  const setActive = useActive((state) => state.setActive);
  console.log(active);
  const { register, setValue } = useFormContext();
  const setSummary = useStore((state) => state.setSummary);
  const summary = useStore((state) => state.summary);

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Placeholder.configure({
        placeholder: "Summary",
      }),
    ],
    content: summary,
    editorProps: {
      attributes: {
        class:
          //Width size is fixed becouse the default width is too big
          `prose px-5 prose-sm  prose-zinc min-h-[150px] max-h-[300px] rounded w-[330px] border border-[#71717A] overflow-y-scroll dark:prose-invert focus:border-white focus:outline-none [&_*]:my-2`,
        // "prose rounded-md min-w-full max-w-96 text-white border list-desc  min-h-[150px]  text-white border border-[#71717A] text-sm focus:outline-none focus:border-white",
      },
    },
    onUpdate({ editor }) {
      const html = editor.getHTML();

      setValue(value, editor.getText());
      setSummary(html);
    },
  });

  return (
    <div className="mx-auto">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
