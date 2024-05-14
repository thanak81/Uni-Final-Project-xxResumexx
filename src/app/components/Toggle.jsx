import React from "react";
import * as Toggle from "@radix-ui/react-toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";

function ToggleComp({pressed,onPressedChange,icon}) {
  return (
    <Toggle.Root pressed={pressed} onPressedChange={onPressedChange} className="Toggle " aria-label="Toggle">
      {icon}
    </Toggle.Root>
  );
}

export default ToggleComp;
