import cards from "../../../data/cards.json";
import { Card } from "../../../@types/Card";

export default (req: any, res: any) => {
  const {
    query: { searchquery }
  } = req;
  let result = [...cards];
  if (searchquery) {
    const query = searchquery.toLowerCase();

    result = result.filter((card: Card) => card.name.toLowerCase().includes(query));
  }

  res.json(result);
};
