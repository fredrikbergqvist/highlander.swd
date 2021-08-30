import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";

type OwnProps = unknown

type Props = OwnProps & IconBaseProps;

const UpgradeIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase {...Props}>
      <path
        d="M32 10L16 2 0 10l16 8 16-8zM16 4.655L26.689 10 16 15.345 5.311 10 16 4.655zm12.795 9.743L32 16l-16 8-16-8 3.205-1.602L16 20.796zm0 6L32 22l-16 8-16-8 3.205-1.602L16 26.796z"/>
    </IconBase>
  );
};

export default UpgradeIcon;
