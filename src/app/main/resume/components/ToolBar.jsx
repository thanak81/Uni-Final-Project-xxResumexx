import React, { useEffect } from "react";
import { Editor } from "@tiptap/react";
import ToggleComp from "@/app/components/Toggle";
import {
  FontItalicIcon,
  FontBoldIcon,
  ListBulletIcon,
} from "@radix-ui/react-icons";
import NumberBullet from "@/app/components/icons/NumberBullet";
import { Button } from "@radix-ui/themes";
import BardComp from "@/app/components/BardComp";
import { resumeForm } from "../state/GlobalState";

function ToolBar({ editor, datas }) {
  const forms = resumeForm((state) => state.value);
  // useEffect(() => {
  //   editor?.chain().focus().insertContent(datas).run();
  // }, [datas,editor]);
  if (!editor) {
    return null;
  }
  return (
    <>
      {/* {datas && (
        <div className="w-full">
          <div>{datas}</div>
          <Button
            className="text-black"
            type="button"
            onClick={() => editor.chain().focus().insertContent(datas).run()}
          >
            Insert Suggestion
          </Button>
        </div>
      )} */}
      {editor && (
        <div className="flex gap-2 my-2 rounded">
     
              <BardComp
                width={"w-full"}
                aiForm={true}
                editor={editor}
              />
          
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
        </div>
      )}
    </>
  );
}

export default ToolBar;
