import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";
import React from "react";

type OwnProps = unknown

type Props = OwnProps & IconBaseProps;

const HolocronIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase viewBox="0 0 513 513" {...Props}>
      <rect x="37.761" y="37.816" width="436.191" height="436.191" rx="5" stroke="#000" strokeWidth="10" />
      <rect
        x="38.78"
        y="251.387"
        width="308.568"
        height="308.568"
        rx="5"
        transform="rotate(-44.562 38.78 251.387)"
        stroke="#000"
        strokeWidth="10"
      />
      <ellipse cx="256.553" cy="256.581" rx="147.017" ry="148.363" stroke="#000" strokeWidth="10" />
      <rect x="154.078" y="156.382" width="205.043" height="205.043" rx="5" stroke="#000" strokeWidth="5" />
      <rect x="175.345" y="176.964" width="163.374" height="163.374" rx="5" stroke="#000" strokeWidth="5" />
    </IconBase>
  );
};

export default HolocronIcon;
