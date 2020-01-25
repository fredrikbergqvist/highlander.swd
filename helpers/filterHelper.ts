import { Card } from "../@types/Card";
import { CardFilter } from "../@types/CardFilter";
import { Sets } from "../enums/Sets";
import { CardType } from "../enums/CardType";

export const defaultFilter: CardFilter = {
  sets: [Sets.SoH, Sets.CONV],
  types: [CardType.upgrade, CardType.support, CardType.event, CardType.character],
  query: ""
};
export const filterCardsByQuery = (query: string = "", cardList: Card[]) => {
  if (!query) {
    return cardList;
  }

  query = query.toLowerCase();
  return [...cardList].filter((card: Card) => card.name.toLowerCase().includes(query));
};

export const filterCardsBySets = (sets: string[] = [], cardList: Card[]) => {
  if (sets.length === 0) {
    return cardList;
  }

  return [...cardList].filter((card: Card) => sets.some(set => card.set_name === set));
};

export const filterCardsByType = (types: string[] = [], cardList: Card[]) => {
  if (types.length === 0) {
    return cardList;
  }

  return [...cardList].filter((card: Card) => types.some(type => card.type_name === type));
};
