import React from "react";
import styled from "@emotion/styled";

import SpokenCard from "./small/SpokenCard";

const source = [
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689673898/poetry/restored-myc-photo_qxcrkz.png",
    link: "https://youtu.be/o7I1Vd5AUsM",
  },
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689674147/poetry/mothersday_c7ctev.png",
    link: "https://youtu.be/W4E1t4ZNIc0",
  },
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689673800/poetry/Jesus_reigns_wzubxl.jpg",
    link: "https://youtu.be/qXWpQEVuq0M",
  },
];

const Media = () => {
  return (
    <Main>
      <UpdatesTitle>
        <div className="w-[90%] h-full flex items-center">
          Me as a{" "}
          <div style={{ color: "var(--symph-text)", marginLeft: ".8rem" }}>
            Spoken Artist
          </div>
        </div>
      </UpdatesTitle>
      <CardsContainer>
        <Container>
          {source.map((item) => (
            <SpokenCard ImageSource={item.image} Link={item.link} />
          ))}
        </Container>
      </CardsContainer>
    </Main>
  );
};

export default Media;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
  //   background-color: gray;
  display: flex;
  justify-content: center;
`;

const UpdatesTitle = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-family: var(--formal-font);
  font-weight: 700;
  color: var(--symph-dark-text);
  margin-bottom: 2rem;
`;

const Main = styled.div`
  min-height: 60vh;
  margin: 5rem 0;
`;
