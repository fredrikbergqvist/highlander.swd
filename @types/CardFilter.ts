export interface CollectionFilter {
  useCollection: boolean;
  missing: boolean;
  duplicates: boolean;
}

export interface CardFilter {
  sets: string[];
  types: string[];
  affiliation: string[];
  faction: string[];
  rarity: string[];
  query: string;
  collection: CollectionFilter;
}
