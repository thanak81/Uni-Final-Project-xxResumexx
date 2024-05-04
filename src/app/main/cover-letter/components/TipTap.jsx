"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "../../resume/components/ToolBar";
import { useFormContext } from "react-hook-form";
import Placeholder from "@tiptap/extension-placeholder";
// import {z} from "zod"
const Tiptap = ({index, value,data }) => {
  const { register, setValue } = useFormContext();

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Placeholder.configure({
        placeholder: "Summary",
      }),
    ],
    content: data ,
    editorProps: {
      attributes: {
        class:
          //Width size is fixed becouse the default width is too big
          `prose px-5 prose-sm prose-zinc min-h-[500px]  max-w-[100rem] rounded  border border-[#71717A] overflow-y-scroll dark:prose-invert focus:border-white focus:outline-none [&_*]:my-2`,
        // "prose rounded-md  max-w-96 text-white border list-desc  min-h-[150px]  text-white border border-[#71717A] text-sm focus:outline-none focus:border-white",
      },
    },
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setValue(value, html);
    },
  });

  return (
    <div className="w-full">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
