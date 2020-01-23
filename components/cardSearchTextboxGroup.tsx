import React from "react";
import { NextFunctionComponent } from "../pages";

interface OwnProps {
  onChange: (newValue: string) => void;
  listObject: any;
  legend: string;
  iconPrefix: string;
}

type Props = OwnProps;
const CardSearchCheckboxGroup: NextFunctionComponent<Props> = ({ listObject, onChange, legend, iconPrefix }) => {
  const checkboxMarkup = Object.keys(listObject).map(key => {
    // @ts-ignore
    const val: keyof typeof listObject = key;
    const name: string = listObject[val] as string;
    return (
      <label className="checkbox-label" htmlFor={`${iconPrefix}checkbox-${key}`}>
        <input type="checkbox" id={`${iconPrefix}checkbox-${key}`} onChange={() => onChange(key)} />
        <span className="sr-only">{name}</span>
        <img src={`/icons/${iconPrefix}${key}.svg`} alt={name} title={name} width="20" />
        <style jsx>{`
          .checkbox-label {
            margin: 0 3px;
            display: inline-block;
          }
          input {
            color: #ccc;
          }
          input:checked {
            color: #333;
          }
        `}</style>
      </label>
    );
  });
  return (
    <fieldset>
      <legend>{legend}</legend>
      {checkboxMarkup}
    </fieldset>
  );
};

export default CardSearchCheckboxGroup;
