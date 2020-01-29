import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";
import React from "react";

interface OwnProps {
}

type Props = OwnProps & IconBaseProps;

const SpiritOfRebellionSetIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase {...Props}>
      <path
        d="M14.814.486a15.376 15.376 0 00-4.344 1.06 15.679 15.679 0 00-4.739 2.997c-.222.222-.324.343-.303.363.02.02.131.01.334-.03l.455-.09 1.307-.152c.202-.02.354-.04.455-.06.102-.041.213-.071.334-.092.142-.02.274-.04.395-.06h.274c.04 0 .02.02-.061.06-.06.02-.05.04.03.061H10.47l-1.154.636a.716.716 0 01-.304.151c-.08.02-.233.03-.456.03H8.04l-.486.515-1.185.03c-.607 0-1.114.03-1.519.091-.405.04-.648.091-.729.152-.08.06-.172.15-.273.272l-.334.424c-.081.141-.122.222-.122.242l1.458-.151-.273.454-.516.03c-.446.02-.73.05-.851.09a.277.277 0 00-.213.182c-.02.101-.06.172-.121.212-.182.121-.04.162.425.121l1.944-.15 1.458-.092c.547-.02 1.033-.04 1.459-.06H9.62l-.547.424-1.853.06c-.284.02-.496.04-.638.06l-.577.061-.608.03c-.364.02-.901.071-1.61.152-.709.08-1.154.141-1.336.181-.061.04-.173.233-.335.576a20.61 20.61 0 00-.486 1.12 17.261 17.261 0 00-.668 2.482A12.028 12.028 0 00.72 15.17v.666l2.127.121 2.612.121c7.27.303 14.622.293 22.054-.03 1.134-.04 2.106-.08 2.916-.121.81-.06 1.235-.101 1.276-.121.02-.06.02-.293 0-.697 0-.423-.02-.817-.06-1.18a14.975 14.975 0 00-1.945-5.813 14.968 14.968 0 00-4.1-4.632 14.33 14.33 0 00-3.646-1.967 16.309 16.309 0 00-4.131-1.03c-.284-.02-.78-.03-1.489-.03-.709 0-1.215.01-1.519.03zm7.686 4.39c.425.06.85.182 1.276.363.445.162.82.354 1.123.576.365.242.72.585 1.064 1.029.344.444.648.938.91 1.483.102.202.173.374.214.515.04.12.07.242.09.363l.122.939c.04.322.05.605.03.847 0 .222-.04.485-.12.787-.062.222-.133.434-.213.636a3.478 3.478 0 01-.335.575 4.978 4.978 0 01-.76.818 3.574 3.574 0 01-.88.545c-.425.201-.83.312-1.215.333-.385 0-.84-.091-1.367-.273a9.354 9.354 0 01-.881-.333 5.446 5.446 0 01-.668-.363 6.903 6.903 0 01-.7-.575 11.566 11.566 0 01-.667-.787 10.385 10.385 0 01-.547-.97 5.942 5.942 0 01-.365-.907A5.366 5.366 0 0118.46 8.6c.061-.646.233-1.252.517-1.817a4.62 4.62 0 01.273-.484c.081-.121.203-.262.365-.424a3.339 3.339 0 011.974-.969c.183-.04.324-.06.426-.06.121 0 .283.01.486.03zM.72 17.621v.424c.02.06.05.08.09.06.183.02.588.061 1.215.122.648.04 1.023.07 1.124.09.102.081.183.313.243.697l.061.424c0 .02-.07.03-.213.03h-.212v-.666L1.57 18.68a3.439 3.439 0 01-.426-.06c-.162-.041-.253-.051-.273-.031-.02.02-.01.1.03.242l.183.817 1.913.182v.363h.638l.152.454h-.79l.092.515c0 .101-.01.162-.03.182 0 .02-.031.02-.092 0-.446-.08-.8-.121-1.063-.121H1.63l.03.12c.041.203.143.505.305.909.162.384.324.737.486 1.06a14.824 14.824 0 002.825 3.814 16.767 16.767 0 004.07 2.815c1.418.707 3.038 1.181 4.86 1.423.507.06 1.175.091 2.006.091.83 0 1.478-.03 1.944-.09a17.878 17.878 0 004.04-1.09 16.972 16.972 0 003.645-2.06c.284-.221.547-.453.79-.695.263-.243.385-.374.364-.394-.02-.02-.121 0-.303.06-.183.061-.466.132-.85.212-.386.061-.983.152-1.793.273l-1.944.333c-.405.08-.588.1-.547.06.06-.06.395-.232 1.002-.514.608-.303.993-.464 1.155-.484l.334-.061c.08-.02.091-.01.03.03-.142.08.02.07.486-.03l2.035-.424c.345-.08.537-.131.578-.151a5.87 5.87 0 00.577-.303 6.68 6.68 0 00.607-.424c.122-.1.274-.282.456-.545.182-.262.263-.403.243-.424-.02-.04-.121-.04-.304 0l-3.19.727c-.12.06-.09-.01.092-.212l.273-.333c.061-.06.264-.141.608-.242l.364-.121a.76.76 0 00.213-.091c.04-.04.132-.08.273-.121a.923.923 0 01.334-.091l-.03.06c-.04.061.04.061.243 0l.273-.09.669-.182c.445-.1.729-.202.85-.303.122-.1.243-.333.365-.696.121-.323.223-.525.304-.605.08-.081.121-.162.121-.243.02-.1 0-.15-.06-.15-.041 0-.132.03-.274.09-.243.1-.314.11-.213.03l.03-.09-.242.06-1.398.424c0-.02.03-.111.092-.273l.212-.424a.65.65 0 01.122-.212c.04-.04.09-.06.152-.06.587-.1.941-.182 1.063-.242.121-.06.253-.121.395-.182.142-.06.263-.131.364-.212.122-.1.193-.192.213-.272.02-.101.07-.242.152-.424.101-.242.192-.545.273-.908.101-.364.152-.606.152-.727.02-.12.05-.232.091-.333.04-.12.06-.343.06-.666v-.454l-1.123.06c-1.62.142-3.362.233-5.225.273-1.843.04-4.972.06-9.386.06-4.294 0-7.27-.01-8.931-.03-1.661-.04-3.2-.12-4.618-.242l-1.7-.12v.453z" />
    </IconBase>
  );
};

export default SpiritOfRebellionSetIcon;
