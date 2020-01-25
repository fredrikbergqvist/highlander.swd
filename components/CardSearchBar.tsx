import { NextFunctionComponent } from "../pages";
import React from "react";
import { Sets } from "../enums/Sets";
import { CardType } from "../enums/CardType";
import CardSearchCheckboxGroup from "./CardSearchTextboxGroup";
import { CardFilter } from "../@types/CardFilter";
import { Affiliation } from "../enums/Affiliation";
import { Faction } from "../enums/Faction";
import { Rarity } from "../enums/Rarity";

interface OwnProps {
  onUpdate: (updatedFilter: CardFilter) => void;
  filter: CardFilter;
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

      <style jsx>{`
        form {
          text-align: center;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        fieldset {
          border: none;
          padding: 0;
        }
        .search-field {
          width: 100%;
        }
        .search {
          width: 100%;
          padding: 20px 10px;
          margin: 10px 0;
        }
      `}</style>
    </form>
  );
};

export default CardSearchBar;
