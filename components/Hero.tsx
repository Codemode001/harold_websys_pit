import React from "react";
import styled from "@emotion/styled";

import Sponsor from "./small/Sponsor";

const Hero = () => {
  return (
    <div>
      <Main>
        <Video autoPlay muted loop>
          <source src="harold drum portfolio.mp4" type="video/mp4" />
        </Video>
      </Main>
      <Sponsor />
    </div>
  );
};

export default Hero;

const Video = styled.video`
  height: 95%;
  width: 98%;
  object-fit: cover;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const Main = styled.div`
  height: 35rem;
  background-color: var(--light-gray-background);
  display: flex;
  justify-content: center;
  align-items: center;
`;
