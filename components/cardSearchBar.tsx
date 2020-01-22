import { NextFunctionComponent } from "../pages";
import React from "react";
import { Sets } from "../enums/sets";

interface OwnProps {
  onUpdate: (newValue: string) => void;
  searchQuery: string;
}

type Props = OwnProps;

const CardSearchBar: NextFunctionComponent<Props> = ({ onUpdate, searchQuery }) => {
  const onCheckboxChange = (setKey: string) => {
    console.log(setKey);
  };
  const setCheckboxes = Object.keys(Sets).map(setKey => {
    // @ts-ignore
    const val: keyof typeof Sets = setKey;
    const setName: string = Sets[val];
    return (
      <label htmlFor={`set-checkbox-${setKey}`}>
        <input type="checkbox" id={`set-checkbox-${setKey}`} onChange={() => onCheckboxChange(setKey)} />
        <span className="sr-only">{setName}</span>
        <img src={`/icons/set-${setKey}.svg`} alt={setName} title={setName} width="20" />
      </label>
    );
  });

  return (
    <form>
      <fieldset>
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
      <fieldset>
        <legend className="sr-only">filter cards by set</legend>
        {setCheckboxes}
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
