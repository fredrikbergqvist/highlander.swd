import { Card } from "../@types/Card";

export const getBaseCardInfo = (card: Card) => {
  return (
    <ul>
      <li>{card.affiliation_name}</li>
      <li>{card.faction_name}</li>
      <li>{card.rarity_name}</li>
    </ul>
  );
};
