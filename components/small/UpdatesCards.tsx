import React from "react";
import styled from "@emotion/styled";

const UpdatesCards = ({
  imgSource,
  projTitle,
}: {
  imgSource: string;
  projTitle: string;
}) => {
  return (
    <Main>
      <ImageContainer>
        <Image src={imgSource} alt={projTitle} />
      </ImageContainer>
      <Title>{projTitle}</Title>
    </Main>
  );
};

export default UpdatesCards;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 80%;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 20%;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--symph-dark-text);
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  :hover {
    scale: 1.1;
  }
`;

const Main = styled.div`
  width: 23.8%;
  height: 23rem;
  border-radius: 15px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: 0.3s ease-in-out;

  :hover {
    box-shadow: 0 0 4px var(--symph-text);
  }
`;
