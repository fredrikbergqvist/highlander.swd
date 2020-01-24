import { Card } from "../@types/Card";

const CARD_LIST_STORAGE_KEY = "CARD_LIST_STORAGE_KEY";
export const setCardListSessionStorage = (cards: Card[]) => {
  if (!sessionStorage) return [];
  sessionStorage.setItem(CARD_LIST_STORAGE_KEY, JSON.stringify(cards));
};

export const getCardListSessionStorage = () => {
  if (!sessionStorage) return;
  return JSON.parse(sessionStorage.getItem(CARD_LIST_STORAGE_KEY) || "null");
};

export const deleteCardListSessionStorage = () => {
  if (!sessionStorage) return;
  sessionStorage.removeItem(CARD_LIST_STORAGE_KEY);
};
