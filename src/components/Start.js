import React from "react";
import styled from "styled-components";

export default function Start() {
  return (
    <Flexbox>
      <H1> für ein</H1>
      <H1> unFassbares SAUNAERLEBNIS</H1>
      <H1> zu Hause</H1>
    </Flexbox>
  );
}

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const H1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  text-shadow: whitesmoke 1px 2px 3px;
  line-height: 0.3;
  letter-spacing: 1.8;
`;
