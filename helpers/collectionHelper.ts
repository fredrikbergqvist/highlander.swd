import fetch from "isomorphic-unfetch";
import { getCollectionSessionStorage, setCollectionSessionStorage } from "./SessionStorageHelper";
import { CardCollection, CardCollectionInfo } from "../@types/CardCollection";
import { CollectionFilter } from "../@types/CardFilter";

let collection: CardCollection = {};
export const getDefaultCollectionFilter = (): CollectionFilter => ({
  useCollection: true,
  missing: false,
  duplicates: false
});
const getCollectionFromApi = async (): Promise<CardCollection> => {
  const result = await fetch("/api/getCollection");
  const apiCollection = await result.json();
  setCollectionSessionStorage(apiCollection);
  return apiCollection;
};

const getStoredCollection = async (): Promise<CardCollection> => {
  if (collection === {}) {
    return {};
  }
  let storedCollection: CardCollection = getCollectionSessionStorage();
  if (!storedCollection) {
    storedCollection = await getCollectionFromApi();
  }
  collection = storedCollection;
  return { ...collection };
};

export const getCollectionCardInfo = (cardCode: string): CardCollectionInfo => collection[cardCode];

export const getCollection = async (): Promise<CardCollection> => {
  return await getStoredCollection();
};
