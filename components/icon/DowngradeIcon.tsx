import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";

interface OwnProps {
}

type Props = OwnProps & IconBaseProps;

const DowngradeIcon: NextFunctionComponent<Props> = (Props) => {
  return (
    <IconBase {...Props}>
      <path
        d="M26 2H6L0 8v21a1 1 0 001 1h30a1 1 0 001-1V8l-6-6zM16 26L6 18h6v-6h8v6h6l-10 8zM4.828 6l2-2h18.343l2 2H4.828z"/>
    </IconBase>
  );
};

export default DowngradeIcon;
