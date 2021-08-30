import React, { useEffect, useState } from "react";
import { Card } from "../@types/Card";
import dynamic from "next/dynamic";
import { getCards } from "../helpers/cardListHelper";
import { CardFilter } from "../@types/CardFilter";
import useDebounce from "../hooks/useDebounce";
import MetaTags from "../components/MetaTags";
import Head from "next/head";
import { getCardFilterLocalStorage, setCardFilterLocalStorage } from "../helpers/LocalStorageHelper";
import { CardType } from "../enums/CardType";

const CardTable = dynamic(() => import("../components/CardTable"));
const CardSearchBar = dynamic(() => import("../components/CardSearchBar"));

type OwnProps = unknown

type Props = OwnProps;

export interface NextFunctionComponent<T> extends React.FunctionComponent<T> {
  getInitialProps?: any;
}

const Home: NextFunctionComponent<Props> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<CardFilter>({ ...getCardFilterLocalStorage(), collection: undefined });
  const debouncedFilter = useDebounce(filter, 350);
  const hasCharacterFilter = filter.types.length === 0 || filter.types.some(type => type === CardType.character);

  const onSearchUpdate = (updatedFilter: CardFilter) => {
    setLoading(true);
    setFilter(updatedFilter);
  };

  useEffect(() => {
    getCards().then(result => {
      setLoading(false);
      setCards(result);
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
        <title>SWDestiny.net Holocron</title>
      </Head>
      <div className="hero">
        <CardSearchBar onUpdate={onSearchUpdate} filter={filter} />
        <CardTable cards={cards} isLoading={loading} hasCharacterFilter={hasCharacterFilter} />
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default Home;
