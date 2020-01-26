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
        <th>Points/Cost</th>
        <th>Health</th>
      </tr>
      </thead>
      <tbody className="tbody">
      {cards?.length > 0 && cards.map(card => <CardTableRow card={card} key={card.code} />)}
      {cards?.length === 0 && isLoading && <CardTableSkeleton numberOfRows={15} />}
      {cards?.length === 0 && !isLoading && (
        <tr className={"no-results"}>
          <td colSpan={10}>
            <span>No results founds!</span>
            <span>Try a different set of filters or search terms!</span>
          </td>
        </tr>
      )}
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
        .no-results {
          padding: 10px;
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }
        .no-results span {
          padding: 10px;
          display: block;
        }
      `}</style>
    </table>
  );
};

export default CardTable;
