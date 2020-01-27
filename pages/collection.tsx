import React, { useEffect, useState } from "react";
import { Card } from "../@types/Card";
import dynamic from "next/dynamic";
import { getCards } from "../helpers/cardListHelper";
import { CardFilter } from "../@types/CardFilter";
import useDebounce from "../hooks/useDebounce";
import MetaTags from "../components/MetaTags";
import Head from "next/head";
import { getCardFilterLocalStorage, setCardFilterLocalStorage } from "../helpers/LocalStorageHelper";
import { getCollection, getDefaultCollectionFilter } from "../helpers/collectionHelper";
import { CardCollection } from "../@types/CardCollection";

const CardTable = dynamic(() => import("../components/CardTable"));
const CardSearchBar = dynamic(() => import("../components/CardSearchBar"));

interface OwnProps {
}

type Props = OwnProps;

export interface NextFunctionComponent<T> extends React.FunctionComponent<T> {
  getInitialProps?: any;
}

const Collection: NextFunctionComponent<Props> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [collection, setCollection] = useState<CardCollection>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<CardFilter>({
    ...getCardFilterLocalStorage(),
    collection: getDefaultCollectionFilter()
  });
  const debouncedFilter = useDebounce(filter, 350);

  const onSearchUpdate = (updatedFilter: CardFilter) => {
    setLoading(true);
    setFilter(updatedFilter);
  };

  useEffect(() => {
    getCollection().then(collection => {
      setCollection(collection);
    });

    getCards().then(cards => {
      setLoading(false);
      setCards(cards);
    });
  }, []);

  useEffect(() => {
    setCardFilterLocalStorage(filter);
    getCards(filter).then(result => {
      setLoading(false);
      setCards(result);
    });
  }, [debouncedFilter]);

  return (
    <>
      <Head>
        <MetaTags />
        <title>Collection - SWDestiny.net Holocron</title>
      </Head>
      <div className="hero">
        <CardSearchBar onUpdate={onSearchUpdate} filter={filter} collection={collection} />
        <CardTable cards={cards} isLoading={loading} showCollection={true} />
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default Collection;
