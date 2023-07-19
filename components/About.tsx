import React from "react";
import styled from "@emotion/styled";

const About = () => {
  return (
    <Main>
      <Container>
        <AboutHeader>ABOUT ME</AboutHeader>
        <p>
          Hey there, I'm Harold, and I'm a drummer, spoken poet artist, college
          student, and part-time full-stack web developer. Drumming is my
          heartbeat; it's the language through which I express myself. When I'm
          behind the drum kit, I feel an unexplainable energy flowing through
          me, connecting me to the rhythm of life. Whether I'm jamming with
          fellow musicians or exploring my own creative soundscape, the drums
          allow me to unleash my passion and transport both myself and the
          audience to a place of pure musical euphoria.
        </p>
        <p>
          But my artistic journey doesn't stop at drumming. I'm also deeply
          connected to the power of words and their ability to paint vivid
          pictures in the minds of others. As a spoken poet artist, I harness
          the magic of language, rhythm, and emotion to deliver performances
          that captivate hearts and minds. Through my poetry, I aim to provoke
          thought, challenge societal norms, and inspire change. It's a
          beautiful way for me to share my perspective and connect with others
          on a profound level.
        </p>
        <div className="flex justify-end">
          <LearnMore>Learn more about me</LearnMore>
        </div>
        <div style={{ margin: "3rem 0 3rem 0" }}>
          <AboutImage src="drum-photo.jpg" />
        </div>
      </Container>
    </Main>
  );
};

export default About;

const AboutImage = styled.img`
  height: 34rem;
  width: 100%;
  object-fit: cover;
`;

const LearnMore = styled.button`
  background-color: var(--button-bg);
  height: 2.5rem;
  width: 15rem;
  font-weight: 600;
  color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;

  :hover {
    transform: scale(1.1);
  }
`;

const AboutHeader = styled.div`
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
`;

const Container = styled.div`
  width: 90%;

  p {
    font-size: 1.3rem;
    margin: 1rem 0;
    line-height: 2rem;
    font-weight: 320;
  }
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
