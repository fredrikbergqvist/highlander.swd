import { NextFunctionComponent } from "../pages";
import React from "react";
import { Sets } from "../enums/Sets";
import { CardType } from "../enums/CardType";
import CardSearchCheckboxGroup from "./cardSearchTextboxGroup";

interface OwnProps {
  onUpdate: (newValue: string) => void;
  searchQuery: string;
}

type Props = OwnProps;

const CardSearchBar: NextFunctionComponent<Props> = ({ onUpdate, searchQuery }) => {
  const onCheckboxChange = (setKey: string) => {
    console.log(setKey);
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
          value={searchQuery}
          onChange={e => onUpdate(e.target.value)}
          className={"search"}
          id="card-search-input"
        />
      </fieldset>
      <CardSearchCheckboxGroup
        legend={"Filter by set"}
        listObject={Sets}
        onChange={onCheckboxChange}
        iconPrefix="set-"
      />
      <CardSearchCheckboxGroup
        legend={"Filter by type"}
        listObject={CardType}
        onChange={onCheckboxChange}
        iconPrefix="card-type-"
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
