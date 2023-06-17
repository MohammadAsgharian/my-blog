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
    <div>
        <input  type="text" className="w-full bg-transparent rounded border2"></input>
    </div>
  );
};
