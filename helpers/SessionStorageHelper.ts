import { Card } from "../@types/Card";

const CARD_LIST_STORAGE_KEY = "CARD_LIST_STORAGE_KEY";
export const setCardListSessionStorage = (cards: Card[]) => {
  if (!process.browser) return;
  sessionStorage.setItem(CARD_LIST_STORAGE_KEY, JSON.stringify(cards));
};

export const getCardListSessionStorage = () => {
  if (!process.browser) return [];
  return JSON.parse(sessionStorage.getItem(CARD_LIST_STORAGE_KEY) || "null");
};

export const deleteCardListSessionStorage = () => {
  if (!process.browser) return;
  sessionStorage.removeItem(CARD_LIST_STORAGE_KEY);
};
