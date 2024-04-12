import React from "react";
import { Editor } from "@tiptap/react";
import ToggleComp from "@/app/components/Toggle";
import { FontItalicIcon ,FontBoldIcon} from "@radix-ui/react-icons";

function ToolBar({ editor }) {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex gap-1 border border-white my-2 rounded">
      <ToggleComp
        pressed={editor.isActive("bulletList") ? "is-active" : ""}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        icon={<FontItalicIcon />}
      />

      <ToggleComp
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        icon={<FontBoldIcon />
      }
      />
    </div>
  );
}

export default ToolBar;
