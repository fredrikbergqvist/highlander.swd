import React, { useEffect, useState } from "react";
import { Card } from "../@types/Card";
import dynamic from "next/dynamic";
import { getCards } from "../helpers/cardListHelper";
import { CardFilter } from "../@types/CardFilter";
import useDebounce from "../hooks/useDebounce";
import MetaTags from "../components/MetaTags";
import Head from "next/head";
import { getCardFilterLocalStorage, setCardFilterLocalStorage } from "../helpers/LocalStorageHelper";

const CardTable = dynamic(() => import("../components/CardTable"));
const CardSearchBar = dynamic(() => import("../components/CardSearchBar"));

interface OwnProps {
}

type Props = OwnProps;

export interface NextFunctionComponent<T> extends React.FunctionComponent<T> {
  getInitialProps?: any;
}

const Home: NextFunctionComponent<Props> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<CardFilter>(getCardFilterLocalStorage());
  const debouncedFilter = useDebounce(filter, 350);

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
        <title>Star Wars: Destiny net</title>
      </Head>
      <div className="hero">
        <CardSearchBar onUpdate={onSearchUpdate} filter={filter} />
        <CardTable cards={cards} isLoading={loading} />
      </div>

      <style jsx>{`
        main {
          width: 90%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Home;
