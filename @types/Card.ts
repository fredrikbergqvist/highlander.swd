export type cardSetNames =
  | "Awakenings"
  | "Spirit of Rebellion"
  | "Empire at War"
  | "Two-Player Game"
  | "Legacies"
  | "Rivals"
  | "Across the Galaxy"
  | "Convergence"
  | "Way of the Force"
  | "Allies of Necessity"
  | "Spark of Hope"
  | "Covert Missions";
export type cardSetCodes =
  | "AW"
  | "SoR"
  | "EaW"
  | "TPG"
  | "LEG"
  | "RIV"
  | "WotF"
  | "AtG"
  | "CONV"
  | "AoN"
  | "SoH"
  | "CM";
export type cardTypeCode = "event" | "support" | "character" | "downgrade" | "upgrade" | "plot" | "battlefield";
export type cardTypeName = "Event" | "Support" | "Character" | "Downgrade" | "Upgrade" | "Plot" | "Battlefield";
export type cardFactionCode = "blue" | "yellow" | "red" | "gray";
export type cardFactionName = "Force" | "Rogue" | "Command" | "General";
export type cardAffiliationCode = "hero" | "neutral" | "villain";
export type cardAffiliationName = "Hero" | "Neutral" | "Villain";
export type cardRarityCode = "L" | "S" | "C" | "U" | "R";
export type cardRarityName = "Legendary" | "Starter" | "Common" | "Uncommon" | "Rare";

export interface CardSubType {
  code: string;
  name: string;
}

export interface Card {
  position: number;
  code: string;
  ttscardid: string;
  name: string;
  subtitle: string | null;
  text: string;

  set_code: cardSetCodes;
  set_name: cardSetNames;
  sides: string[];
  deck_limit: number;
  flavor: string;
  illustrator: string;
  is_unique: boolean;
  has_die: boolean;
  has_errata: boolean;

  type_code: cardTypeCode;
  type_name: cardTypeName;
  faction_code: cardFactionCode;
  faction_name: cardFactionName;
  affiliation_code: cardAffiliationCode;
  affiliation_name: cardAffiliationName;
  rarity_code: cardRarityCode;
  rarity_name: cardRarityName;

  url: string;
  imagesrc: string;
  label: string;
  cp: number;

  subtypes: CardSubType[];

  points: string | null;
  health: string | null;
  cost: number | null;
}

/*
"sides": [
"2F",
"1Dr",
"1Dc",
"1Sh",
"Sp",
"Sp"
],
"set_code": "LEG",
"set_name": "Legacies",
"text": "[special]- Choose and do two of the following: gain 1 resource, give a character 1 shield, turn one of your dice to any side, or discard the top card of a deck.",
"deck_limit": 1,
"flavor": "\"Do. Or do not. There is not try.\"",
"illustrator": "Cristi Balanescu",
"is_unique": true,
"has_die": true,
"has_errata": false,
"url": "https://swdestinydb.com/card/05033",
"imagesrc": "https://swdestinydb.com/bundles/cards/en/05/05033.jpg",
"label": "Yoda - Wizened Master",
"cp": 1013
* */
