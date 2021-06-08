import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";

export default function Eindruecke() {
  return (
    <div>
      <Bild />
    </div>
  );
}

const Bild = styled.img`
  width: 100%;
  height: 100%;
`;
