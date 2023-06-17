"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { FC } from "react";
import { Toolbar } from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

interface Props {}

export const Editor: FC<Props> = (): JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit, Underline,Placeholder.configure({placeholder:"تایت نمایید"})],
    editorProps:{
      attributes:{class:'prose prose-lg focus:outline-none dark:prose-invert max-w-full mx-auto h-full'}
    }
  });

  return (
    <div className="p-3 dark:bg-primary-dark bg-primary transition">
      <Toolbar editor={editor}></Toolbar>
      <div className="h-[1px] w-full bg-secondary-dark dark:secondary-light my-3"></div>
      <EditorContent editor={editor} />
    </div>
  );
};
