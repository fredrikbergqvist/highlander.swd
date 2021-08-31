import fetch from "isomorphic-unfetch";
import { Card } from "../@types/Card";
import { getCardListSessionStorage, setCardListSessionStorage } from "./SessionStorageHelper";
import { CardFilter } from "../@types/CardFilter";
import {
  filterCardsByAffiliation,
  filterCardsByCollection,
  filterCardsByFaction,
  filterCardsByQuery,
  filterCardsByRarity,
  filterCardsBySets,
  filterCardsByType
} from "./filterHelper";
import { getCardFilterLocalStorage } from "./LocalStorageHelper";

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

export const getCards = async (filter: CardFilter = getCardFilterLocalStorage()): Promise<Card[]> => {
  let filteredCards = await getStoredCards();
  console.time("filters");
  filteredCards = filterCardsByQuery(filter.query, filteredCards);
  filteredCards = filterCardsBySets(filter.sets, filteredCards);
  filteredCards = filterCardsByType(filter.types, filteredCards);
  filteredCards = filterCardsByRarity(filter.rarity, filteredCards);
  filteredCards = filterCardsByAffiliation(filter.affiliation, filteredCards);
  filteredCards = filterCardsByFaction(filter.faction, filteredCards);
  filteredCards = await filterCardsByCollection(filter, filteredCards);
  console.timeEnd("filters");
  return filteredCards;
};
