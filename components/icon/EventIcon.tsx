import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";

type OwnProps = unknown

type Props = OwnProps & IconBaseProps;

const EventIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase {...Props}>
      <path d="M12 0L0 16h12L4 32l28-20H16L28 0z"/>
    </IconBase>
  );
};

export default EventIcon;
