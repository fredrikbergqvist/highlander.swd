import { Card } from "../../@types/Card";
import { NextFunctionComponent } from "../../pages";
import { CardType } from "../../enums/CardType";
import dynamic from "next/dynamic";
import React from "react";

interface OwnProps {
  card: Card;
}

type Props = OwnProps;

const EventModal = dynamic(() => import("./EventModal"));

const CardModal: NextFunctionComponent<Props> = ({ card }) => {
  const getCard = () => {
    switch (card.type_name) {
      case CardType.event:
        return <EventModal card={card} />;
      case CardType.support:
        return <p>event</p>;
      case CardType.character:
        return <p>event</p>;
      case CardType.upgrade:
        return <p>event</p>;
      case CardType.battlefield:
        return <p>event</p>;
      case CardType.plot:
        return <p>event</p>;
      case CardType.downgrade:
        return <p>event</p>;
      default:
        return <p>apa</p>;
    }
  };

  return (
    <div className="card-modal">
      {getCard()}
      <style jsx>{`
        .card-modal {
          position: absolute;
          background: #fff;
          border: 2px solid #333;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default CardModal;
