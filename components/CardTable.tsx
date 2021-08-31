import { Card } from "../@types/Card";
import { NextFunctionComponent } from "../pages";
import React, { useEffect, useState } from "react";
import CardTableRow from "./CardTableRow";
import { mediaWidth } from "../styles/sizes";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import EmpireAtWarSetIcon from "./icon/EmpireAtWarSetIcon";

interface OwnProps {
  cards: Array<Card>;
  isLoading: boolean;
  showCollection?: boolean;
  hasCharacterFilter?: boolean;
}

type Props = OwnProps;

const CardTable: NextFunctionComponent<Props> = props => {
  const { cards = [], isLoading, showCollection = false, hasCharacterFilter = true } = props;
  const [visibleCards, setVisibleCards] = useState<Array<Card>>([]);
  const [tableFoot, setTableFoot] = useState<HTMLTableSectionElement | null>(null);
  const isLoadingClass = isLoading ? "loading" : "";
  const pagingNumber = 50;
  useIntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (cards.length === visibleCards.length) {
          return;
        }
        const end =
          cards.length > visibleCards.length + pagingNumber ? visibleCards.length + pagingNumber : cards.length;
        setVisibleCards([...cards].slice(0, end));
      }
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: "200px"
    },
    tableFoot
  );
  useEffect(() => {
    const end = cards.length > pagingNumber ? pagingNumber : cards.length;
    setVisibleCards([...cards].slice(0, end));
  }, [cards]);

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
      {visibleCards.length > 0 &&
      visibleCards.map(card => (
        <CardTableRow
          card={card}
          key={card.code}
          showCollection={showCollection}
          hasCharacterFilter={hasCharacterFilter}
        />
      ))}
      {cards?.length === 0 && isLoading && (
        <tr className="loading-results">
          <td colSpan={4}>
            <span>Please wait while the card database is loading...</span>
            <EmpireAtWarSetIcon variant="XL" />
          </td>
        </tr>
      )}
      {visibleCards.length === 0 && !isLoading && (
        <tr className="no-results">
          <td colSpan={4}>
            <span>No results founds 😥</span>
            <span>Try a different set of filters or search terms!</span>
          </td>
        </tr>
      )}
      </tbody>
      {cards.length !== visibleCards.length && <tfoot ref={setTableFoot} />}

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

        .loading-results,
        .no-results {
          padding: 10px;
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }

        .loading-results span,
        .no-results span {
          padding: 10px;
          display: block;
        }

        .loading-results {
          font-size: 40px;
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
