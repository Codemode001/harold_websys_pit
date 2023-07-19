import React from "react";
import styled from "@emotion/styled";

const images = [
  "STARS.png",
  "RANK.png",
  "WEBO.png",
  "AD.png",
  "EduRank-Logo.png",
  "Socotec-Certification-International-ISO-9001.png",
];

const Sponsor = () => {
  return (
    <Main>
      <Container>
        {images.map((item) => (
          <Image src={item} />
        ))}
      </Container>
    </Main>
  );
};

export default Sponsor;

const Image = styled.img`
  height: 5rem;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;
