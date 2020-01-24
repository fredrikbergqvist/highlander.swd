import { CardType } from "../enums/CardType";
import { Sets } from "../enums/Sets";
import BattleFieldIcon from "../components/icon/BattleFieldIcon";
import CharacterIcon from "../components/icon/CharacterIcon";
import DowngradeIcon from "../components/icon/DowngradeIcon";
import EventIcon from "../components/icon/EventIcon";
import PlotIcon from "../components/icon/PlotIcon";
import SupportIcon from "../components/icon/SupportIcon";
import UpgradeIcon from "../components/icon/UpgradeIcon";
import DeathStarIcon from "../components/icon/DeathStarIcon";
import LegaciesSetIcon from "../components/icon/LegaciesSetIcon";
import AlliesOfNecessitySetIcon from "../components/icon/AlliesOfNecessitySetIcon";
import AcrossTheGalaxySetIcon from "../components/icon/AcrossTheGalaxySetIcon";
import RivalsSetIcon from "../components/icon/RivalsSetIcon";
import EmpireAtWarSetIcon from "../components/icon/EmpireAtWarSetIcon";
import SparkOfHopeSetIcon from "../components/icon/SparkOfHopeSetIcon";
import SpiritOfRebellionSetIcon from "../components/icon/SpiritOfRebellionSetIcon";
import TwoPlayerGameSetIcon from "../components/icon/TwoPlayerGameSetIcon";
import WayOfTheForceSetIcon from "../components/icon/WayOfTheForceSetIcon";
import AwakeningsSetIcon from "../components/icon/AwakeningsSetIcon";
import ConvergenceSetIcon from "../components/icon/ConvergenceSetIcon";

export const getFilterIcon = (type: CardType | Sets) => {
  switch (type) {
    case CardType.battlefield:
      return BattleFieldIcon;
    case CardType.character:
      return CharacterIcon;
    case CardType.downgrade:
      return DowngradeIcon;
    case CardType.event:
      return EventIcon;
    case CardType.plot:
      return PlotIcon;
    case CardType.support:
      return SupportIcon;
    case CardType.upgrade:
      return UpgradeIcon;

    case Sets.LEG:
      return LegaciesSetIcon;
    case Sets.AoN:
      return AlliesOfNecessitySetIcon;
    case Sets.AtG:
      return AcrossTheGalaxySetIcon;
    case Sets.RIV:
      return RivalsSetIcon;
    case Sets.CONV:
      return ConvergenceSetIcon;
    case Sets.EaW:
      return EmpireAtWarSetIcon;
    case Sets.SoH:
      return SparkOfHopeSetIcon;
    case Sets.SoR:
      return SpiritOfRebellionSetIcon;
    case Sets.TPG:
      return TwoPlayerGameSetIcon;
    case Sets.WotF:
      return WayOfTheForceSetIcon;
    case Sets.AW:
      return AwakeningsSetIcon;

    default:
      return DeathStarIcon;
  }
};
