import React from "react";
import { Editor } from "@tiptap/react";
// import ToggleComp from "@/app/components/Toggle";
import ToggleComp from "@/app/components/Toggle";
import {
  FontItalicIcon,
  FontBoldIcon,
  ListBulletIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import NumberBullet from "@/app/components/icons/NumberBullet";
import BardComp from "@/app/components/BardComp";
import BardCover from "./BardCover";

function ToolBarCoverLetter({ editor }) {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex gap-2 my-2 rounded items-center w-full">
      <div className="flex gap-2 items-center justify-center">
        <ToggleComp
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          icon={<FontBoldIcon />}
        />
        <ToggleComp
          pressed={editor.isActive("bulletList") ? "is-active" : ""}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          icon={<ListBulletIcon />}
        />
        <ToggleComp
          pressed={editor.isActive("orderedList") ? "is-active" : ""}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          icon={<NumberBullet />}
        />
        <div>
          <BardCover editor={editor} aiForm={true} />
        </div>
      </div>

      {/* <ToggleComp
        pressed={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
        onPressedChange={() => editor.chain().focus().setTextAlign('center').run()}
        icon={<TextAlignCenterIcon/>}
      />
           <ToggleComp
        pressed={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        onPressedChange={() => editor.chain().focus().setTextAlign('left').run()}
        icon={<TextAlignLeftIcon/>}
      />
      <ToggleComp
        pressed={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        onPressedChange={() => editor.chain().focus().setTextAlign('right').run()}
        icon={<TextAlignRightIcon/>}
      />
      <ToggleComp
        pressed={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
        onPressedChange={() => editor.chain().focus().setTextAlign('justify').run()}
        icon={<TextAlignJustifyIcon/>}
      /> */}
    </div>
  );
}

export default ToolBarCoverLetter;
