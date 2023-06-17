"use client";

import classNames from "classnames";
import { FC, MouseEventHandler, ReactNode, useCallback } from "react";
import { Button } from "./Button";
import { BsLink45Deg } from "react-icons/bs";

interface Props {
 
}

export const LinkForm: FC<Props> = ({
 
}): JSX.Element => {
 
  return (
    <div className="rounded p-2">
        <input  type="text" 
            className="w-full bg-transparent rounded border2 
            border-secondary-dark focus:border-primary-dark 
            dark:focus:border-primary transition p-2 text-primary-dark dark:text-primary"></input>
        <div className="flex items-center space-x-2 mt-2 dark:bg-primary-dark shadow-sm shadow-secondary-dark">
            <input type="checkbox" id="open-in-new-tab"></input>
            <label htmlFor="open-in-new-tab">open in new tab</label>
            <div className="flex-1 text-right">
                <button className="bg-action px-2 py-1 text-primary rounded text-sm">Apply</button>
            </div>
        </div>
    </div>
  );
};
