"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { FC } from "react";

interface Props {}

export const Editor: FC<Props> = (): JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  return <EditorContent editor={editor} />;
};
