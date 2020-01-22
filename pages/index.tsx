import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import { Card } from "../@types/Card";
import useDebounce from "../hooks/useDebounce";
import CardSearchBar from "../components/cardSearchBar";
import dynamic from "next/dynamic";

const CardTable = dynamic(() => import("../components/cardTable"));

interface OwnProps {
}

type Props = OwnProps;

export interface NextFunctionComponent<T> extends React.FunctionComponent<T> {
  getInitialProps?: any;
}

const Home: NextFunctionComponent<Props> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchQuery, 350);
  const getCards = (api: string) => {
    fetch(api)
      .then((result: any) => result.json())
      .then((result: Card[]) => {
        setCards(result);
      });
  };
  const onSearchUpdate = (newValue: string) => setSearchQuery(() => newValue);

  useEffect(() => {
    getCards("/api/cards");
  }, []);

  useEffect(() => {
    if (searchQuery === "") return getCards("/api/cards");
    getCards(`/api/cards/${searchQuery}`);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="hero">
        <CardSearchBar onUpdate={onSearchUpdate} searchQuery={searchQuery} />
        <CardTable cards={cards} />
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
