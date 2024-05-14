"use client"
import { EditorContent, EditorRoot } from 'novel'
import React, { useState } from 'react'

function NovelEditor() {
    const [content, setContent] = useState(null);
  return (
    <EditorRoot>
      <EditorContent
        initialContent={{
            type: "doc",
            content: content
        }}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setContent(json);
        }}
      />
    </EditorRoot>
  )
}

export default NovelEditor