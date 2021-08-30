import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";
import React from "react";

type OwnProps = unknown

type Props = OwnProps & IconBaseProps;

const HolocronFillIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase viewBox="0 0 301 301" {...Props}>
      <rect
        x="24.141"
        y="24.603"
        width="251.735"
        height="251.735"
        rx="5"
        stroke="#000"
        strokeWidth="10"
        fill="transparent"
      />
      <rect
        x="22.631"
        y="149.924"
        width="181.025"
        height="181.025"
        rx="5"
        transform="rotate(-44.562 22.631 149.924)"
        stroke="#000"
        strokeWidth="10"
        fill="transparent"
      />
      <ellipse cx="149.719" cy="152.713" rx="83.579" ry="84.344" stroke="#000" strokeWidth="10" fill="transparent" />
      <rect
        x="91.269"
        y="93.029"
        width="118.334"
        height="118.334"
        rx="5"
        stroke="#000"
        strokeWidth="5"
        fill="transparent"
      />
      <rect
        x="103.543"
        y="104.908"
        width="94.287"
        height="94.287"
        rx="5"
        stroke="#000"
        strokeWidth="5"
        fill="transparent"
      />
      <path
        d="M115.262 38.57L39.589 109.13V38.569h75.673zM39.589 187.383l70.561 75.673H39.589v-75.673zM185.405 263.056l75.673-70.562v70.562h-75.673zM261.078 114.243l-70.561-75.674h70.561v75.674z"
        fill="#000"
        stroke="#000"
      />
    </IconBase>
  );
};

export default HolocronFillIcon;
