import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";

interface OwnProps {
}

type Props = OwnProps & IconBaseProps;

const RebelAllianceIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase {...Props} viewBox="0 0 300 300">
      <path
        d="M7.42 145.986c1.765-46.793 25.479-89.951 68.83-118.47.128.048 1.251-.361.738.61-3.434 3.184-65.172 76.114-8.344 133.68 0 0 29.858 28.704 53.011 1.468 0 0 22.847-29.577-.289-74.413 0 0-5.856-14.64-26.955-23.721l16.992-18.748s14.359 6.161 25.478 22.871c0 0 .593-17.593-12.884-36.34l26.345-29.89 26.08 29.609s-11.993 16.991-12.876 36.902c0 0 8.191-13.477 25.776-23.151l16.686 18.748s-16.045 5.287-26.794 23.529c-9.242 16.902-16.357 53.05.416 75.223 0 0 18.772 26.618 51.792-1.571 0 0 60.712-54.399-6.226-133.048 0 0-3.658-3.233.449-1.476 29.586 21.54 65.012 49.946 68.67 120.837-1.444 85.966-59.012 147.334-143.074 147.334C68.934 295.968 4.95 227.283 7.42 145.986"/>
    </IconBase>
  );
};

export default RebelAllianceIcon;
