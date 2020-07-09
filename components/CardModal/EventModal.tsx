import { Card } from "../../@types/Card";
import { NextFunctionComponent } from "../../pages";
import { getBaseCardInfo } from "../../helpers/cardMarkupHelper";
import React from "react";

interface OwnProps {
  card: Card;
}

type Props = OwnProps;

const EventModal: NextFunctionComponent<Props> = ({ card }) => {
  return (
    <div className="event">
      <div className="text-content">
        <h2>
          {card.name} {card.subtitle && ` - ${card.subtitle}`}
        </h2>
        {getBaseCardInfo(card)}
        <p>
          <strong>{card.type_name}</strong> Cost: {card.cost}
        </p>
        <p dangerouslySetInnerHTML={{ __html: card.text }} />
      </div>

      <style jsx>{`
        .event {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </div>
  );
};

export default EventModal;
