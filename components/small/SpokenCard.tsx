import React from "react";
import styled from "@emotion/styled";

const SpokenCard = ({
  ImageSource,
  Link,
}: {
  ImageSource: string;
  Link: string;
}) => {
  return (
    <Main>
      <Image src={ImageSource} />

      <ButtonContainer>
        <a href={Link} target="_blank" className="w-full">
          <ViewButton>View on Youtube</ViewButton>
        </a>
      </ButtonContainer>
    </Main>
  );
};

export default SpokenCard;

const ButtonContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const ViewButton = styled.button`
  background-color: var(--symph-text);
  width: 100%;
  height: 2.5rem;
  border-radius: 5px;
  color: white;
  font-family: var(--casual-font);
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.1s ease-in-out;

  :hover {
    scale: 1.05;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const Main = styled.div`
  height: 20rem;
  width: 32%;
`;
