import { NextFunctionComponent } from "../pages";
import React from "react";
import { Sets } from "../enums/Sets";
import { CardType } from "../enums/CardType";
import CardSearchCheckboxGroup from "./CardSearchTextboxGroup";
import { CardFilter } from "../@types/CardFilter";

interface OwnProps {
  onUpdate: (updatedFilter: CardFilter) => void;
  filter: CardFilter;
}

type Props = OwnProps;

const CardSearchBar: NextFunctionComponent<Props> = ({ onUpdate, filter }) => {
  const onSetCheckboxChange = (updatedSetFilter: string[]) => {
    console.log(updatedSetFilter);
    onUpdate({ ...filter, sets: updatedSetFilter });
  };
  const onTypeCheckboxChange = (updatedTypesFilter: string[]) => {
    console.log(updatedTypesFilter);
    onUpdate({ ...filter, types: updatedTypesFilter });
  };

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
        onChange={onSetCheckboxChange}
        iconPrefix="set-"
        filter={filter.sets}
      />
      <CardSearchCheckboxGroup
        legend={"Filter by type"}
        listObject={CardType}
        onChange={onTypeCheckboxChange}
        iconPrefix="card-type-"
        filter={filter.types}
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
