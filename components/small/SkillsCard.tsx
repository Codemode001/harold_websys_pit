import React from "react";
import styled from "@emotion/styled";

interface Info {
  image: string;
  title: string;
  variant: string;
  buttons: number;
  desciption: string;
}

const SkillsCard = ({ image, title, variant, buttons, desciption }: Info) => {
  return (
    <Main>
      {variant === "secondary" ? (
        <Left>
          <Title>{title}</Title>
          <div style={{ color: "var(--symph-dark-text)" }}>{desciption}</div>
          <div
            className="flex gap-3  w-full"
            style={{ justifyContent: "flex-end" }}
          >
            <Button>Learn {title}</Button>
            {buttons === 2 ? <Button>About {title}</Button> : <div></div>}
          </div>
        </Left>
      ) : (
        <div></div>
      )}
      <ImageBorder>
        <Image src={image} />
      </ImageBorder>
      {variant === "primary" ? (
        <Right>
          <Title>{title}</Title>
          <div style={{ color: "var(--symph-dark-text)" }}>{desciption}</div>
          <div className="flex gap-3">
            <Button>Learn {title}</Button>
            {buttons === 2 ? <Button>About {title}</Button> : <div></div>}
          </div>
        </Right>
      ) : (
        <div></div>
      )}
    </Main>
  );
};

export default SkillsCard;

const Left = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  padding: 0 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Button = styled.button`
  position: relative;
  min-width: 30%;
  height: 2.8rem;
  margin-top: 2rem;
  border-radius: 5px;
  border: none;
  overflow: hidden;
  background-color: var(--button-bg);
  color: white;
  font-weight: 600;
  cursor: pointer;
  z-index: 1;
  background-color: #007bc4;
  padding: 0 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--ustp-bg);
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Title = styled.div`
  font-size: 1.8rem;
  color: var(--symph-text);
  font-family: var(--casual-font);
  margin-bottom: 0.3rem;
`;

const Right = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  padding: 0 1.5rem;
  flex-direction: column;
  justify-content: center;
`;

const ImageBorder = styled.div`
  height: 90%;
  width: 50%;
  border: 4px solid black;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  border-radius: 5px;

  :hover {
    transform: translateY(-10px);
  }
`;

const Main = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
`;
