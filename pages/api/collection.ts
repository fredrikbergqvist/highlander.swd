import collection from "../../data/collection.json";

export default (_req: any, res: any) => {
  return res.json(collection);
};
