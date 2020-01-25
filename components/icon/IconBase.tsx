import React from "react";
import { NextFunctionComponent } from "../../pages";

export interface IconBaseProps {
  viewBox?: string;
  className?: string;
}

type Props = IconBaseProps;
const IconBase: NextFunctionComponent<Props> = ({ children, viewBox = "0 0 32 32", ...rest }) => {
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

      <style jsx>{`
        svg {
          width: 20px;
        }
      `}</style>
    </svg>
  );
};

export default IconBase;
