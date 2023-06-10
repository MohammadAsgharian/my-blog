"use client";

import classNames from "classnames";
import { FC, MouseEventHandler, ReactNode, useCallback } from "react";

interface Props {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({
  children,
  active,
  disabled,
  onMouseDown,
  onClick,
}): JSX.Element => {
  const getActiveStyle = useCallback((): string => {
    if (active)
      return "dark:bg-primary dark:text-primary-dark bg-primary-dark text-primary";
    else return "text-secondary-light bg-secondary-dark";
  }, [active]);

  const commonClasses =
    "p-3 rounded text-lg hover:scale-110 hover:shadow-sm-md transition ";

  return (
    <button
      type="submit"
      onMouseDown={onMouseDown}
      onClick={onClick}
      className={classNames(commonClasses, getActiveStyle())}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
