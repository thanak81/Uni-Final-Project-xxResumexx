"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useStore } from "../state/GlobalState";
import ToolBar from "./ToolBar";

const Tiptap = () => {
  const setSummary = useStore((state) => state.setSummary);
  const address = useStore((state) => state.address);

  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: "<li>Hello World! 🌎️</ul>",
    editorProps: {
      attributes: {
        class:
          "prose rounded-md min-w-full max-w-96 text-white border list-desc  min-h-[150px]  text-white border border-[#71717A] text-sm focus:outline-none focus:border-white",
      },
    },
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setSummary(html);
      console.log(html);
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
