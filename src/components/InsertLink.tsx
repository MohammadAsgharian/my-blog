"use client";

import classNames from "classnames";
import { FC, MouseEventHandler, ReactNode, useCallback } from "react";
import { Button } from "./Button";
import { BsLink45Deg } from "react-icons/bs";
import { LinkForm } from "./LinkForm";

interface Props {
 
}

export const InsertLink: FC<Props> = ({
 
}): JSX.Element => {
 
  return (
    <div className="relative">
        <Button>
          <BsLink45Deg />
        </Button>
        <div className="absolute top-full mt-4">
            <LinkForm></LinkForm>
        </div>
    </div>
  );
};
