import React from "react";
import styled from "@emotion/styled";

import Links from "./small/Links";
import Govern from "./small/Govern";

const Footer = () => {
  return (
    <Main>
      <Links />
      <Govern />
      <div className="flex justify-center">
        <BreadCrumbs>
          <p>© 2023 Strategic Communication Office</p>
          <p>Career Opportunities | Contact us</p>
        </BreadCrumbs>
      </div>
    </Main>
  );
};

export default Footer;

const BreadCrumbs = styled.div`
  width: 70%;
  color: gray;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 2.3rem;
`;

const Main = styled.footer`
  background-color: #1a1851;
  min-height: 44rem;
`;
