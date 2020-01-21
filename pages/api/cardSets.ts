import cardSets from "../../data/sets";

export default (req, res) => {
  res.json(cardSets);
};
