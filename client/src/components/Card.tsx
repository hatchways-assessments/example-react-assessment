import { useState } from "react";
import styled from "styled-components";
import { AspectRatioBox } from "./AspectRatioBox";

const CardWrap = styled.div`
  padding: 10px;
`;

const CardInner = styled.div`
  background: #edede9;
  height: 100%;
  width: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type CardProps = {
  image: any;
};

export const Card = (props: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardWrap onClick={() => setFlipped(!flipped)}>
      <AspectRatioBox>
        <CardInner>{flipped && <img src={props.image.url} />}</CardInner>
      </AspectRatioBox>
    </CardWrap>
  );
};
