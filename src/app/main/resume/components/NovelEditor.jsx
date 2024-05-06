"use client";
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorContent,
  EditorRoot,
} from "novel";

import React from "react";

function NovelEditor() {
  return (
    <EditorRoot>
      <EditorContent>
        <EditorCommand>
          <EditorCommandItem />
          <EditorCommandItem />
          <EditorCommandItem />
        </EditorCommand>
        <EditorBubble>
          <EditorBubbleItem />
          <EditorBubbleItem />
          <EditorBubbleItem />
        </EditorBubble>
      </EditorContent>
    </EditorRoot>
  );
}

export default NovelEditor;
