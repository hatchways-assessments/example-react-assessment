import React from "react";
import styled from "styled-components";

export interface AspectRatioBoxProps {
  ratio?: number;
  style?: React.CSSProperties;
}

const Wrapper = styled.div`
  height: 0;
  overflow: hidden;
  position: relative;
`;
const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AspectRatioBox: React.FC<
  React.PropsWithChildren<AspectRatioBoxProps>
> = ({ ratio, style, children }) => (
  <Wrapper style={{ ...style, paddingTop: `${(ratio || 1) * 100}%` }}>
    <Body>{children}</Body>
  </Wrapper>
);
