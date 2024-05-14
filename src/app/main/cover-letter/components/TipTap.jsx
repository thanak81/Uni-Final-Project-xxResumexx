"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "../../resume/components/ToolBar";
import { useFormContext } from "react-hook-form";
import Placeholder from "@tiptap/extension-placeholder";
import ToolBarCoverLetter from "./ToolbarCoverLetter";
import TextAlign from "@tiptap/extension-text-align";
// import BubbleMenu from '@tiptap/extension-bubble-menu'

// import {z} from "zod"
const Tiptap = ({ index, value, data }) => {
  const { register, setValue } = useFormContext();

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Placeholder.configure({
        placeholder: "Summary",
      }),
      TextAlign.configure({
        alignments:['left', 'center', 'right', 'justify'],

      })
    ],
    content: data,
    editorProps: {
      attributes: {
        class:
          //Width size is fixed becouse the default width is too big
          // `prose px-5 text-black prose-sm prose-zinc min-h-[500px]  max-w-[100rem] rounded  border border-[#71717A] overflow-y-scroll dark:prose-invert focus:border-white focus:outline-none [&_*]:my-2`,
          `prose [&_ul]:list-disc overflow-y-hidden text-black  min-h-[500px]  max-w-[100rem] rounded  border-none overflow-y-scroll  focus:border-white focus:outline-none [&_*]:my-2`,

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
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <ToolBarCoverLetter editor={editor} />
        </BubbleMenu>
      )}
      {/* <div className="absolute z-10 top-[220px] right-5"></div> */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
