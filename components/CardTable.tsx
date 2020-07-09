import { Card } from "../@types/Card";
import { NextFunctionComponent } from "../pages";
import React from "react";
import CardTableSkeleton from "./CardTableSkeleton";
import CardTableRow from "./CardTableRow";
import { mediaWidth } from "../styles/sizes";

interface OwnProps {
  cards: Card[];
  isLoading: boolean;
  showCollection?: boolean;
  hasCharacterFilter?: boolean;
}

type Props = OwnProps;

const CardTable: NextFunctionComponent<Props> = props => {
  const { cards, isLoading, showCollection = false, hasCharacterFilter = true } = props;
  const isLoadingClass = isLoading ? "loading" : "";
  return (
    <table className={`table ${isLoadingClass}`}>
      <thead className="thead">
      <tr>
        <th className="set-info">#</th>
        <th className="name">Name</th>
        {showCollection && (
          <>
            <th>Cards</th>
            <th>Dice</th>
          </>
        )}
        {!showCollection && (
          <>
            <th className="cost">{hasCharacterFilter ? "Points/Cost" : "Cost"}</th>
            {hasCharacterFilter && <th className="health">Health</th>}
          </>
        )}
      </tr>
      </thead>
      <tbody className="tbody">
      {cards?.length > 0 &&
      cards.map(card => (
        <CardTableRow
          card={card}
          key={card.code}
          showCollection={showCollection}
          hasCharacterFilter={hasCharacterFilter}
        />
      ))}
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

        th {
          min-width: 20px;
          width: 60px;
          padding: 10px 5px;
        }
        .name {
          width: auto;
        }
        .cost,
        .health {
          display: none;
        }
        .cost {
          width: 90px;
        }
        .health {
          width: 50px;
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

        @media (min-width: ${mediaWidth.l}) {
          .cost,
          .health {
            display: table-cell;
          }
        }
      `}</style>
    </table>
  );
};

export default CardTable;
