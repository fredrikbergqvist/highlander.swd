import { Card } from "../@types/Card";
import { NextFunctionComponent } from "../pages";
import React from "react";

interface OwnProps {
  card: Card;
}

type Props = OwnProps;

const CardTableRow: NextFunctionComponent<Props> = ({ card }) => {
  return (
    <tr>
      <td className="set-info">
        <img src={`/icons/set-${card.set_code}.svg`} alt={card.set_name} title={card.set_name} /> {card.position}
      </td>
      <td className="name">
        {card.name}
        {card.subtitle && <span> - {card.subtitle}</span>}
      </td>
      <td>{card.cost || ""}</td>
      <td>{card.points || ""}</td>
      <td>{card.health || ""}</td>
      <style jsx>{`
        .name {
          text-align: left;
          padding-left: 5px;
        }

        td {
          border-right: 1px solid #333;
          text-align: center;
          padding: 2px 5px;
        }
        td:last-child {
          border-right: none;
        }
        .set-info {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        img {
          display: inline-block;
          width: 20px;
          padding-right: 2px;
        }
      `}</style>
    </tr>
  );
};

export default CardTableRow;
