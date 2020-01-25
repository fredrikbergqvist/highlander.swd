import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";

interface OwnProps {
}

type Props = OwnProps & IconBaseProps;

const BattleFieldIcon: NextFunctionComponent<Props> = (Props) => {
  return (
    <IconBase {...Props}>
      <path
        d="M16 0C10.477 0 6 4.477 6 10c0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zm0 16a6 6 0 110-12 6 6 0 010 12z"/>
    </IconBase>
  );
};

export default BattleFieldIcon;
