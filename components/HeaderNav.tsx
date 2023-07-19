import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const navs = [
  "About",
  "Academics",
  "Research, Innovation & Entrepreneurship",
  "Global",
  "Updates",
  "Services",
];

interface ContainerProps {
  isVisible: boolean;
}

const Header = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const headerHeight = document.getElementById("header")?.offsetHeight || 0;
      setHeaderVisible(scrollTop < headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Main id="header" isVisible={isHeaderVisible}>
      <Container>
        <LogoContainer>
          <Logo src="tehe.png" />
          <Name>Harold Pisos.</Name>
        </LogoContainer>
        <NavContainer>
          {navs.map((item) => (
            <div className="cursor-pointer" key={item}>
              {item} <FontAwesomeIcon icon={faCaretDown} />
            </div>
          ))}
        </NavContainer>
      </Container>
    </Main>
  );
};

export default Header;

const Container = styled.div`
  width: 90%;
  display: flex;
`;

const Main = styled.div<ContainerProps>`
  height: 8rem;
  display: flex;
  justify-content: center;
  position: ${(props) => (props.isVisible ? "relative" : "fixed")};
  top: 0;
  z-index: 9999;
  background-color: #ffffff;
  width: 100%;
  transition: transform 0.3s ease-in-out;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 85%;
  width: 20%;
  margin-right: 2rem;
`;

const Name = styled.div`
  font-size: 3rem;
  font-family: var(--fat-font);
  color: var(--dark-bg);
  letter-spacing: 2px;
`;

const NavContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--formal-font);
`;
