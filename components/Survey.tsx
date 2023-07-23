import React from "react";
import styled from "@emotion/styled";
import { Slide } from "react-awesome-reveal";

const Survey = () => {
  return (
    <Main>
      <Container>
        <Slide direction="left" className="w-[60%]">
          <Box>
            <h1
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                display: "flex",
              }}
            >
              <div style={{ color: "var(--symph-text)", marginRight: ".5rem" }}>
                CLIENT
              </div>{" "}
              Satisfaction Survey
            </h1>
            <p>
              Rate and give us feedback on how we can serve you better. Please
              fill out our Client Satisfaction Survey.
            </p>
          </Box>
        </Slide>
        <Slide direction="up" className="w-[39%] h-full">
          <Box className="w-full items-center">
            <h1
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
            >
              Scan the QR code below:
            </h1>
            <img
              src="https://tidbits.com/uploads/2017/11/QR-Code-Moby-Dick-Gutenberg.png"
              className="h-[50%]"
              style={{ margin: ".5rem 0" }}
            />
            <p
              style={{
                fontWeight: "600",
                fontSize: "1rem",
                marginBottom: "1rem",
              }}
              className="cursor-pointer"
            >
              or click this link
            </p>
          </Box>
        </Slide>
      </Container>
    </Main>
  );
};

export default Survey;

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  height: 15rem;
  display: flex;
  justify-content: center;
`;
