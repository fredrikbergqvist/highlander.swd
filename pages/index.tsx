import React, { useEffect, useState } from "react";
import { Card } from "../@types/Card";
import dynamic from "next/dynamic";
import { getCards } from "../helpers/CardListHelper";

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
  const [searchQuery, setSearchQuery] = useState<string>("");
  //const debouncedSearchTerm = useDebounce(searchQuery, 350);

  const onSearchUpdate = (newValue: string) => setSearchQuery(() => newValue);

  useEffect(() => {
    getCards().then(result => setCards(result));
  }, []);

  /*  useEffect(() => {
    if (searchQuery === "") return getCards("/api/cards");
    getCards(`/api/cards/${searchQuery}`);
  }, [debouncedSearchTerm]);*/

  return (
    <main>
      <div className="hero">
        <CardSearchBar onUpdate={onSearchUpdate} searchQuery={searchQuery}/>
        <CardTable cards={cards}/>
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
