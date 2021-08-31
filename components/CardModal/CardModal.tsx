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
        return <p>support</p>;
      case CardType.character:
        return <p>character</p>;
      case CardType.upgrade:
        return <p>upgrade</p>;
      case CardType.battlefield:
        return <p>battlefield</p>;
      case CardType.plot:
        return <p>plot</p>;
      case CardType.downgrade:
        return <p>downgrade</p>;
      default:
        return <p></p>;
    }
  };

  return (
    <div className="card-modal">
      <div className="text-content">{getCard()}</div>
      <div className="image-content">
        <img src={card.imagesrc} alt={card.name} width="298" height="418" />
      </div>
      <style jsx>{`
        .card-modal {
          position: absolute;
          background: #fff;
          border: 2px solid #333;
          padding: 10px;
          top: 30%;
          display: flex;
          flex-direction: row;
          z-index: 10;
          left: 40%;
        }

        .text-content {
          max-width: 300px;
        }

        .image-content {
          margin-left: 20px;
          min-width: 298px;
          min-height: 418px;
        }
      `}</style>
    </div>
  );
};

export default CardModal;
