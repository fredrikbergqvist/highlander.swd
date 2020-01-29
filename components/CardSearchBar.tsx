import { NextFunctionComponent } from "../pages";
import React from "react";
import { Sets } from "../enums/Sets";
import { CardType } from "../enums/CardType";
import CardSearchCheckboxGroup from "./CardSearchTextboxGroup";
import { CardFilter } from "../@types/CardFilter";
import { Affiliation } from "../enums/Affiliation";
import { Faction } from "../enums/Faction";
import { Rarity } from "../enums/Rarity";
import { CardCollection } from "../@types/CardCollection";

interface OwnProps {
  onUpdate: (updatedFilter: CardFilter) => void;
  filter: CardFilter;
  collection?: CardCollection;
}

type Props = OwnProps;

const CardSearchBar: NextFunctionComponent<Props> = ({ onUpdate, filter }) => {
  return (
    <form>
      <fieldset className="search-field">
        <legend className="sr-only">Search cards</legend>
        <label className="sr-only" htmlFor="card-search-input">
          Search
        </label>
        <input
          type="text"
          placeholder="Search cards"
          value={filter.query}
          onChange={e => onUpdate({ ...filter, query: e.target.value })}
          className={"search"}
          id="card-search-input"
        />
      </fieldset>

      <CardSearchCheckboxGroup
        legend={"Filter by set"}
        listObject={Sets}
        onChange={(updatedFilter: string[]) => {
          onUpdate({ ...filter, sets: updatedFilter });
        }}
        iconPrefix="set-"
        filter={filter.sets}
      />
      <CardSearchCheckboxGroup
        legend={"Filter by type"}
        listObject={CardType}
        onChange={(updatedFilter: string[]) => {
          onUpdate({ ...filter, types: updatedFilter });
        }}
        iconPrefix="card-type-"
        filter={filter.types}
      />
      <CardSearchCheckboxGroup
        legend={"Filter by affiliation"}
        listObject={Affiliation}
        onChange={(updatedFilter: string[]) => {
          onUpdate({ ...filter, affiliation: updatedFilter });
        }}
        iconPrefix="card-type-"
        filter={filter.affiliation}
      />
      <CardSearchCheckboxGroup
        legend={"Filter by faction"}
        listObject={Faction}
        onChange={(updatedFilter: string[]) => {
          onUpdate({ ...filter, faction: updatedFilter });
        }}
        iconPrefix="card-type-"
        filter={filter.faction}
      />
      <CardSearchCheckboxGroup
        legend={"Filter by rarity"}
        listObject={Rarity}
        onChange={(updatedFilter: string[]) => {
          onUpdate({ ...filter, rarity: updatedFilter });
        }}
        iconPrefix="card-type-"
        filter={filter.rarity}
      />

      {filter.collection && (
        <fieldset className="collection">
          <legend>My collection</legend>

          <input
            type="checkbox"
            id={`collection-owned`}
            onChange={() => {
              onUpdate({
                ...filter,
                collection: {
                  ...filter.collection,
                  missing: !filter.collection.missing
                }
              });
            }}
            checked={filter.collection.missing}
          />
          <label htmlFor="collection-owned">Missing cards</label>
          <input
            type="checkbox"
            id={`collection-duplicates`}
            onChange={() => {
              onUpdate({
                ...filter,
                collection: {
                  ...filter.collection,
                  duplicates: !filter.collection.duplicates
                }
              });
            }}
            checked={filter.collection.duplicates}
          />
          <label htmlFor="collection-duplicates">Show only duplicates</label>
        </fieldset>
      )}

      <style jsx>{`
        form {
          text-align: center;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-bottom: 15px;
        }
        fieldset {
          border: none;
          padding: 0;
          margin: 0 20px;
          display: block;
        }
        .search-field {
          width: 100%;
          margin-bottom: 15px;
        }
        .search {
          width: 100%;
          padding: 20px 10px;
          margin: 10px 0;
        }
        .collection {
          width: 100%;
        }
        .collection label {
          margin: 0 5px;
        }
      `}</style>
    </form>
  );
};

export default CardSearchBar;
