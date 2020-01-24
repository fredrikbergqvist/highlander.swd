import fetch from "isomorphic-unfetch";
import { Card } from "../@types/Card";
import { getCardListSessionStorage, setCardListSessionStorage } from "./SessionStorageHelper";
import { CardFilter } from "../@types/CardFilter";
import { Sets } from "../enums/Sets";
import { CardType } from "../enums/CardType";

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

const defaultFilter: CardFilter = {
  sets: [Sets.SoH, Sets.CONV],
  types: [CardType.upgrade, CardType.support, CardType.event, CardType.character],
  query: ""
};

const filterCardsByQuery = (query: string = "", cardList: Card[]) => {
  if (!query) {
    return cardList;
  }

  query = query.toLowerCase();
  return [...cardList].filter((card: Card) => card.name.toLowerCase().includes(query));
};

const filterCardsBySets = (sets: string[] = [], cardList: Card[]) => {
  if (sets.length === 0) {
    return cardList;
  }

  return [...cardList].filter((card: Card) => sets.some(set => card.set_name === set));
};

export const getCards = async (filter: CardFilter = { ...defaultFilter }): Promise<Card[]> => {
  let filteredCards = await getStoredCards();
  filteredCards = await filterCardsByQuery(filter.query, filteredCards);
  filteredCards = await filterCardsBySets(filter.sets, filteredCards);
  return filteredCards;
};
