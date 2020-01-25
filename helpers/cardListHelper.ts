import fetch from "isomorphic-unfetch";
import { Card } from "../@types/Card";
import { getCardListSessionStorage, setCardListSessionStorage } from "./SessionStorageHelper";
import { CardFilter } from "../@types/CardFilter";
import {
  defaultFilter,
  filterCardsByAffiliation,
  filterCardsByFaction,
  filterCardsByQuery,
  filterCardsByRarity,
  filterCardsBySets,
  filterCardsByType
} from "./filterHelper";

const SWDB_API_BASE = "https://swdestinydb.com/api";
const SWDB_API_CARDS = "/public/cards/";
let cards: Card[] = [];
const getCardsFromApi = async (): Promise<Card[]> => {
  const result = await fetch(SWDB_API_BASE + SWDB_API_CARDS);
  const apiCards = await result.json();
  setCardListSessionStorage(apiCards);
  return apiCards;
};

const getStoredCards = async (): Promise<Card[]> => {
  if (cards.length > 0) {
    return [...cards];
  }
  let storedCards: Card[] = getCardListSessionStorage();
  if (!storedCards) {
    storedCards = await getCardsFromApi();
  }
  cards = storedCards;
  return [...cards];
};

export const getCards = async (filter: CardFilter = { ...defaultFilter }): Promise<Card[]> => {
  let filteredCards = await getStoredCards();
  filteredCards = await filterCardsByQuery(filter.query, filteredCards);
  filteredCards = await filterCardsBySets(filter.sets, filteredCards);
  filteredCards = await filterCardsByType(filter.types, filteredCards);
  filteredCards = await filterCardsByRarity(filter.rarity, filteredCards);
  filteredCards = await filterCardsByAffiliation(filter.affiliation, filteredCards);
  filteredCards = await filterCardsByFaction(filter.faction, filteredCards);
  console.log(filteredCards);
  return filteredCards;
};
