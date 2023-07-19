import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const upperNav = [
  "Career Center",
  "Student Affairs",
  "Alumni Affairs",
  "Employees",
];

const icons = [faSearch, faTwitter, faInstagram, faYoutube, faFacebookF];

const Header = () => {
  return (
    <Main>
      <Container>
        <LeftSide>
          {upperNav.map((item) => (
            <Icon className="cursor-pointer">
              <div className="flex items-center mr-2">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
              <div key={item}>{item}</div>
            </Icon>
          ))}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          <div className="cursor-pointer">COVID-19 Response</div>
        </LeftSide>
        <RightSide>
          <IconsContainer>
            {icons.map((item) => (
              <SocialIcon>
                <FontAwesomeIcon className="cursor-pointer" icon={item} />
              </SocialIcon>
            ))}
          </IconsContainer>
        </RightSide>
      </Container>
    </Main>
  );
};

export default Header;

const SocialIcon = styled.div`
  :hover {
    color: var(--hover-icons);
  }
`;

const Icon = styled.div`
  display: flex;
  min-width: 8rem;
  border-right: solid white 2px;
  height: 45%;
  align-items: center;
`;

const IconsContainer = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;

const RightSide = styled.div`
  width: 50%;
  justify-content: end;
  display: flex;
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 13px;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
`;

const Main = styled.div`
  background-color: #222831;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  color: white;
`;
