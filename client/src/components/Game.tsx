import styled from "styled-components";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import shuffle from "lodash/shuffle";

const GameContainer = styled.main`
  margin: 0 auto;
  min-width: 400px;
  width: 70%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px;

  > * {
    flex-basis: 25%;
  }
`;

const getApiUrl = () => {
  return "https://api.thecatapi.com/";
};

export const Game = () => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${getApiUrl()}v1/images/search?limit=8`);
      const images = await response.json();
      const cards = [...images, ...images];
      setCards(shuffle(cards));
    })();
  }, []);

  return (
    <GameContainer>
      {cards.map((image, i) => (
        <Card key={i} image={image} />
      ))}
    </GameContainer>
  );
};
