import React, { useEffect, useState } from "react";
import { Card } from "../@types/Card";
import dynamic from "next/dynamic";
import { defaultFilter, getCards } from "../helpers/CardListHelper";
import { CardFilter } from "../@types/CardFilter";
import useDebounce from "../hooks/useDebounce";

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
  const [filter, setFilter] = useState<CardFilter>({ ...defaultFilter });
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
    getCards(filter).then(result => {
      setLoading(false);
      setCards(result);
    });
  }, [debouncedFilter]);

  return (
    <main>
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
    </main>
  );
};

export default Home;
