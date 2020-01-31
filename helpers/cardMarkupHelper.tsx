import { Card } from "../@types/Card";
import { getFilterIcon } from "./iconHelper";
import { CardType } from "../enums/CardType";
import { Affiliation } from "../enums/Affiliation";
import React from "react";
import HolocronIcon from "../components/icon/HolocronIcon";

export const getBaseCardInfo = (card: Card) => {
  const TypeIcon = getFilterIcon(card.type_name as CardType);
  const AffiliationIcon = getFilterIcon(card.affiliation_name as Affiliation);
  const factionClass = `faction-${card.faction_name}`;
  return (
    <ul>
      <li>
        <AffiliationIcon className={` ${factionClass}`} />
        {card.affiliation_name}
      </li>
      <li>
        <TypeIcon className={`type-icon ${factionClass}`} />
        {card.faction_name}
      </li>
      <li className={card.rarity_code}>
        <HolocronIcon /> {card.rarity_name}
      </li>
      <style jsx>{`
        ul {
          display: flex;
          flex-direction: row;
        }
        svg {
        }
      `}</style>
    </ul>
  );
};
