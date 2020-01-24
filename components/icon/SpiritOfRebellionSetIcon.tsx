import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";

interface OwnProps {
}

type Props = OwnProps & IconBaseProps;

const SpiritOfRebellionSetIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase {...Props}>
      <path
        d="M16 0C7.164 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm7.805 4.293a3.902 3.902 0 010 7.804 3.902 3.902 0 010-7.804z"/>
    </IconBase>
  );
};

export default SpiritOfRebellionSetIcon;
