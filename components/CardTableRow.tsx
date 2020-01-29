import { Card } from "../@types/Card";
import { NextFunctionComponent } from "../pages";
import React from "react";
import { getFilterIcon } from "../helpers/iconHelper";
import { Sets } from "../enums/Sets";
import { getCollectionCardInfo } from "../helpers/collectionHelper";
import { CardType } from "../enums/CardType";

interface OwnProps {
  card: Card;
  showCollection?: boolean;
}

type Props = OwnProps;

const CardTableRow: NextFunctionComponent<Props> = ({ card, showCollection = false }) => {
  const SetIcon = getFilterIcon(card.set_name as Sets);
  const TypeIcon = getFilterIcon(card.type_name as CardType);
  const rarityClass = `rarity-${card.rarity_name}`;
  const collectionInfo = showCollection ? getCollectionCardInfo(card.code) : null;
  return (
    <tr className={rarityClass}>
      <td className="set-info">
        <SetIcon /> {card.position}
      </td>
      <td className="name">
        <p>
          <TypeIcon className={`type-icon faction-${card.faction_name}`} />
          {card.name}
          {card.subtitle && <span> - {card.subtitle}</span>}
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
        }
        .faction-Force {
          fill: #6c86e2;
        }
        .faction-Command {
          fill: #e26c6c;
        }
        .faction-Rogue {
          fill: #e5b66c;
        }
        .faction-General {
          fill: #ccc;
        }

        .rarity-Legendary .set-info {
          background-color: #d9a0ff;
        }
        .rarity-Common .set-info {
          background-color: #b7ceff;
        }
        .rarity-Uncommon .set-info {
          background-color: #fffbb7;
        }
        .rarity-Rare .set-info {
          background-color: #c2ffbf;
        }
        .rarity-Starter .set-info {
          background-color: #dbdbdb;
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
