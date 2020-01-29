import React from "react";
import { NextFunctionComponent } from "../pages";
import { getFilterIcon } from "../helpers/iconHelper";
import { faction, rarity } from "../styles/colors";

interface OwnProps {
  onChange: (newValue: string[]) => void;
  listObject: any;
  legend: string;
  iconPrefix: string;
  filter: string[];
  showText?: boolean;
  showIcon?: boolean;
}

type Props = OwnProps;
const CardSearchCheckboxGroup: NextFunctionComponent<Props> = ({
                                                                 listObject,
                                                                 onChange,
                                                                 legend,
                                                                 iconPrefix,
                                                                 filter = [],
                                                                 showText = false,
                                                                 showIcon = true
                                                               }) => {
  const checkboxMarkup = Object.keys(listObject).map(key => {
    // @ts-ignore
    const val: keyof typeof listObject = key;
    const name: string = listObject[val] as string;
    const Icon = getFilterIcon(listObject[val]);
    const isChecked: boolean = filter.some(f => f === name);
    const labelTextClass = showText ? "" : "sr-only";
    const updateFilter = () => {
      let updatedFilter = [...filter];
      if (isChecked) {
        return onChange(updatedFilter.filter(f => f !== name));
      }
      updatedFilter.push(name);
      onChange(updatedFilter);
    };
    return (
      <label className={`checkbox-label ${key}`} htmlFor={`${iconPrefix}checkbox-${key}`} key={key}>
        <input type="checkbox" id={`${iconPrefix}checkbox-${key}`} onChange={updateFilter} checked={isChecked} />
        {showIcon && <Icon className="icon" />}
        <span className={labelTextClass}>{name}</span>
        <style jsx>{`
          .checkbox-label {
            margin: 0 3px;
            display: inline-block;
            cursor: pointer;
          }
          svg {
            width: 40px;
            fill: #333;
            border: 1px solid #000;
            border-radius: 50%;
            padding: 5px;
            background-color: #fff;
            opacity: 0.5;
          }
          input {
            position: absolute;
            left: -999em;
          }
          input:focus + svg {
            opacity 1;
          }
          input:checked + svg {
            opacity 1;
          }
          label {
            position: relative;
          }
          input:focus + span,
          label:hover span {
            clip: auto;
            clip-path: none;
            height: auto;
            margin: 0;
            overflow: unset;
            padding: 5px 10px;
            background-color: #fff;
            position: absolute;
            width: auto;
            top: 40px;
            left: 0;
            border: 1px solid #333;
          }
          .L svg {
            fill: ${rarity.legendary};
          }
          .R svg {
            fill: ${rarity.rare};
          }
          .yellow svg,
          .U svg {
            fill: ${rarity.uncommon};
          }
          .blue svg,
          .C svg {
            fill: ${rarity.common};
          }
          .gray svg,
          .S svg {
            fill: ${rarity.starter};
          }
          .red svg {
            fill: ${faction.command};
          }
        `}</style>
      </label>
    );
  });
  return (
    <fieldset>
      <legend>{legend}</legend>
      {checkboxMarkup}
      <style jsx>{`
        fieldset {
          margin: 0 20px 20px;
          display: block;
        }
      `}</style>
    </fieldset>
  );
};

export default CardSearchCheckboxGroup;
