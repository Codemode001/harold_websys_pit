import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Card = ({ ImageSource, Desc }: { ImageSource: string; Desc: string }) => {
  return (
    <div className="h-[48%]">
      <img
        src={ImageSource}
        style={{
          height: "80%",
          width: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20%",
          fontSize: "12px",
          color: "var(--symph-light-text)",
        }}
      >
        {Desc}
      </div>
    </div>
  );
};

const travel = [
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689752165/Me/LRM_EXPORT_20211230_191733_lbbwlj.jpg",
    desc: "Cafe 14:15: Instagrammable cafe has nice ambiance, great customer service, and a variety of amazing drinks and pastry",
  },
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689752189/Me/IMG-20220504-WA0003_1_quijw5.jpg",
    desc: "MANTIANAK TREE PARK: You can find some attractive animals in the zoo with picnic ground.",
  },
];

const PresidentCorner = () => {
  return (
    <Main>
      <Container>
        <Header>THE ME CORNER</Header>
        <ImagesContainer>
          <Left>
            <img
              src="https://res.cloudinary.com/dhhamkkue/image/upload/v1689752254/Me/320694264_840892847116855_2488899801280706743_n_hki5ro.jpg"
              className="h-full w-full"
              style={{ objectFit: "cover", height: "100%" }}
            />
            <div className="h-full w-full absolute inset-0 bg-gradient-to-r from-transparent to-white"></div>
          </Left>
          <Right>
            <Magnified>
              {" "}
              <FontAwesomeIcon icon={faShoePrints} /> LAAG - I love going to new
              places
            </Magnified>
            <div className="flex w-full h-full">
              <RightSmall>
                {travel.map((item) => (
                  <Card ImageSource={item.image} Desc={item.desc} />
                ))}
              </RightSmall>
              <LeftSmall>
                <Video autoPlay muted loop>
                  <source src="harold-gym.mp4" type="video/mp4" />
                </Video>
                <Button>Get Inspired</Button>
              </LeftSmall>
            </div>
          </Right>
        </ImagesContainer>
      </Container>
    </Main>
  );
};

export default PresidentCorner;

const Button = styled.button`
  background-color: var(--ustp-bg);
  height: 4rem;
  width: 12rem;
  border-radius: 10px;
  box-shadow: 0px 2px 10px;
  font-weight: 600;
  color: var(--ustp-yellow);
  margin-top: 3rem;
`;

const Video = styled.video`
  width: 90%;
  height: 70%;
  object-fit: cover;
`;

const LeftSmall = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const RightSmall = styled.div`
  width: 45%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Magnified = styled.div`
  color: var(--ustp-bg);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Right = styled.div`
  width: 60%;
  padding: 1.5rem;
`;

const Left = styled.div`
  height: inherit;
  width: 40%;
  background-color: gray;
  position: relative;
`;

const ImagesContainer = styled.div`
  height: 75vh;
  display: flex;
`;

const Header = styled.div`
  font-size: 2rem;
  font-family: var(--casual-font);
  background-color: var(--ustp-bg);
  color: white;
  border-radius: 10px;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  width: 90%;
`;

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
