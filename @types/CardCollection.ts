export interface CardCollectionInfo {
  quantity: number;
  dice: number;
}

export interface CardCollection {
  [key: string]: CardCollectionInfo;
}
