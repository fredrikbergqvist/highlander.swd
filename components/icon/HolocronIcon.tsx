import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";
import React from "react";

interface OwnProps {
}

type Props = OwnProps & IconBaseProps;

const HolocronIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase viewBox="0 0 513 513" {...Props}>
      <rect x="78.435" y="70.662" width="355.089" height="355.089" rx="5" stroke="#000" strokeWidth="10" />
      <rect
        x="76.305"
        y="247.437"
        width="255.348"
        height="255.348"
        rx="5"
        transform="rotate(-44.562 76.305 247.437)"
        stroke="#000"
        strokeWidth="10"
        fill="#ffffff"
      />
      <ellipse cx="255.572" cy="251.371" rx="117.894" ry="118.973" stroke="#000" strokeWidth="10" fill="#ffffff" />
      <rect x="173.124" y="167.182" width="166.919" height="166.919" rx="5" stroke="#000" strokeWidth="5" />
      <rect x="190.437" y="183.938" width="132.998" height="132.998" rx="5" stroke="#000" strokeWidth="5" />
    </IconBase>
  );
};

export default HolocronIcon;
