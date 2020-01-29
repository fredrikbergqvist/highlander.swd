import { Card } from "../@types/Card";
import { NextFunctionComponent } from "../pages";
import React from "react";
import { getFilterIcon } from "../helpers/iconHelper";
import { Sets } from "../enums/Sets";
import { getCollectionCardInfo } from "../helpers/collectionHelper";
import { CardType } from "../enums/CardType";
import { faction, rarity } from "../styles/colors";

interface OwnProps {
  card: Card;
  showCollection?: boolean;
}

type Props = OwnProps;

const CardTableRow: NextFunctionComponent<Props> = ({ card, showCollection = false }) => {
  const SetIcon = getFilterIcon(card.set_name as Sets);
  const TypeIcon = getFilterIcon(card.type_name as CardType);
  const collectionInfo = showCollection ? getCollectionCardInfo(card.code) : null;
  return (
    <tr>
      <td className="set-info">
        <SetIcon /> {card.position}
      </td>
      <td className={`name rarity-${card.rarity_name}`}>
        <p>
          <TypeIcon className={`type-icon faction-${card.faction_name}`} />
          {<span>{card.name} </span>}
          {card.subtitle && <span className="sub-title"> - {card.subtitle}</span>}
        </p>
      </td>

      {showCollection && (
        <>
          <td>{collectionInfo?.quantity}</td>
          <td>{collectionInfo?.dice}</td>
        </>
      )}

      {!showCollection && (
        <>
          <td className="cost">
            {card.points || ""} {card.cost || ""}
          </td>
          <td>{card.health || ""}</td>
        </>
      )}
      <style jsx>{`
        .name {
          text-align: left;
          padding-left: 5px;
          border-left: 5px solid transparent;
        }
        .name p {
          display: flex;
          flex-direction: row;
          margin: 0;
        }
        .name svg {
          margin-right: 5px;
        }

        td {
          border-right: 1px solid #333;
          text-align: center;
          padding: 2px 5px;
        }
        td:last-child {
          border-right: none;
        }
        .set-info {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          border: none;
        }
        .faction-Force {
          fill: ${faction.force};
        }
        .faction-Command {
          fill: ${faction.command};
        }
        .faction-Rogue {
          fill: ${faction.rogue};
        }
        .faction-General {
          fill: ${faction.general};
        }

        .rarity-Starter {
          border-left-color: ${rarity.starter};
        }
        .rarity-Common {
          border-left-color: ${rarity.common};
        }
        .rarity-Uncommon {
          border-left-color: ${rarity.uncommon};
        }
        .rarity-Rare {
          border-left-color: ${rarity.rare};
        }
        .rarity-Legendary {
          border-left-color: ${rarity.legendary};
        }

        svg {
          display: inline-block;
          width: 20px;
          padding: 2px 2px;
        }
      `}</style>
    </tr>
  );
};

export default CardTableRow;
