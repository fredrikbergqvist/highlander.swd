import { Card } from "../../@types/Card";
import { NextFunctionComponent } from "../../pages";
import { getBaseCardInfo } from "../../helpers/cardMarkupHelper";

interface OwnProps {
  card: Card;
}

type Props = OwnProps;

const EventModal: NextFunctionComponent<Props> = ({ card }) => {
  return (
    <div className="event">
      <h2>
        {card.name} {card.subtitle && ` - ${card.subtitle}`}
      </h2>
      {getBaseCardInfo(card)}
      <img src={card.imagesrc} alt={card.name} />
      <style jsx>{``}</style>
    </div>
  );
};

export default EventModal;
