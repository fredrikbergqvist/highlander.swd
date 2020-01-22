import { NextFunctionComponent } from "../pages";
import React from "react";

interface OwnProps {
  onUpdate: (newValue: string) => void;
  searchQuery: string;
}

type Props = OwnProps;

const CardSearchBar: NextFunctionComponent<Props> = ({ onUpdate, searchQuery }) => {
  return (
    <form>
      <fieldset>
        <legend className="sr-only">Search and filter cards</legend>
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

      <style jsx>{`
        form {
          text-align: center;
        }
        fieldset {
          border: none;
          padding: 0;
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
