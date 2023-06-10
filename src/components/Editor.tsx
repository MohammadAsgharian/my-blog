"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { FC } from "react";
import { Toolbar } from "./Toolbar";

interface Props {}

export const Editor: FC<Props> = (): JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  return (
    <div className="p-3 dark:bg-primary-dark bg-primary transition">
      <Toolbar editor={editor}></Toolbar>
      <EditorContent editor={editor} />
    </div>
  );
};
