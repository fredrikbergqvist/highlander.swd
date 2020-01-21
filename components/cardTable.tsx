import { Card } from "../@types/Card";
import { NextFunctionComponent } from "../pages";
import React from "react";
import CardTableRow from "./cardTableRow";

interface OwnProps {
  cards: Card[];
}

type Props = OwnProps;

const CardTable: NextFunctionComponent<Props> = ({ cards }) => {
  return (
    <table className="table">
      <thead className="thead">
      <tr>
        <th>#</th>
        <th className="name">Name</th>
        <th>Cost</th>
        <th>Points</th>
        <th>Health</th>
      </tr>
      </thead>
      <tbody className="tbody">
      {cards.map(card => (
        <CardTableRow card={card} key={card.code} />
      ))}
      </tbody>

      <style jsx>{`
        table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
        }
        thead {
          border-bottom: 1px solid #333;
        }

        tr {
        }

        th {
          width: 20px;
          padding-right: 5px;
          padding-left: 5px;
        }
        .name {
          width: 250px;
        }
      `}</style>
    </table>
  );
};

export default CardTable;
