import { Card } from "../@types/Card";
import { CardFilter } from "../@types/CardFilter";
import { Sets } from "../enums/Sets";
import { CardType } from "../enums/CardType";

export const defaultFilter: CardFilter = {
  sets: [Sets.SoH, Sets.CONV],
  types: [CardType.upgrade, CardType.support, CardType.event, CardType.character],
  affiliation: [],
  faction: [],
  rarity: [],
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
  if (types.length === 0 || types.length === 7) {
    return cardList;
  }

  return [...cardList].filter((card: Card) => types.some(type => card.type_name === type));
};

export const filterCardsByFaction = (factions: string[] = [], cardList: Card[]) => {
  if (factions.length === 0 || factions.length === 4) {
    return cardList;
  }

  return [...cardList].filter((card: Card) => factions.some(type => card.faction_name === type));
};

export const filterCardsByRarity = (rarity: string[] = [], cardList: Card[]) => {
  if (rarity.length === 0 || rarity.length === 5) {
    return cardList;
  }

  return [...cardList].filter((card: Card) => rarity.some(type => card.rarity_name === type));
};

export const filterCardsByAffiliation = (affiliations: string[] = [], cardList: Card[]) => {
  if (affiliations.length === 0 || affiliations.length === 3) {
    return cardList;
  }

  return [...cardList].filter((card: Card) => affiliations.some(type => card.affiliation_name === type));
};
