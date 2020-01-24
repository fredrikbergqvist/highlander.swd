import { Card } from "../@types/Card";
import { NextFunctionComponent } from "../pages";
import React from "react";
import CardTableSkeleton from "./CardTableSkeleton";
import CardTableRow from "./CardTableRow";

interface OwnProps {
  cards: Card[];
  isLoading: boolean;
}

type Props = OwnProps;

const CardTable: NextFunctionComponent<Props> = ({ cards, isLoading }) => {
  const isLoadingClass = isLoading ? "loading" : "";
  return (
    <table className={`table ${isLoadingClass}`}>
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
      {cards?.length > 0 && cards.map(card => <CardTableRow card={card} key={card.code} />)}
      {cards?.length === 0 && isLoading && <CardTableSkeleton numberOfRows={15} />}
      </tbody>

      <style jsx>{`
        table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
        }
        .loading {
          opacity: 0.5;
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
