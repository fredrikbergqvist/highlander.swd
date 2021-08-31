import React from "react";
import { NextFunctionComponent } from "../../pages";

export interface IconBaseProps {
  viewBox?: string;
  className?: string;
  style?: Record<string, string>;
}

type Props = IconBaseProps;
const IconBase: NextFunctionComponent<Props> = ({ children, viewBox = "0 0 32 32", variant = "M", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      viewBox={viewBox}
      aria-hidden="true"
      role="presentation"
      {...rest}
    >
      {children}
    </svg>
  );
};

export default IconBase;
