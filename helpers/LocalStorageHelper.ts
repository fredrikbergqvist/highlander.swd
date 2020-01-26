import { defaultFilter } from "./filterHelper";
import { CardFilter } from "../@types/CardFilter";

const CARD_LIST_STORAGE_KEY = "CARD_FILTER_LOCAL_STORAGE";
export const setCardFilterLocalStorage = (filter: CardFilter) => {
  if (!process.browser) return;
  localStorage.setItem(CARD_LIST_STORAGE_KEY, JSON.stringify(filter));
};

export const getCardFilterLocalStorage = () => {
  if (!process.browser) return defaultFilter;
  const parsedResponse = JSON.parse(localStorage.getItem(CARD_LIST_STORAGE_KEY) || "null");
  return parsedResponse ? parsedResponse : defaultFilter;
};

export const deleteFilterLocalStorage = () => {
  if (!process.browser) return;
  localStorage.removeItem(CARD_LIST_STORAGE_KEY);
};
