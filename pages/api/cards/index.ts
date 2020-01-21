import cards from "../../../data/cards.json";

export default (_req: any, res: any) => {
  return res.json(cards);
};
