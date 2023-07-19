import React from "react";
import styled from "@emotion/styled";

import MainSkill from "./small/MainSkill";
import MajorSkills from "./small/MajorSkills";
import OtherSkills from "./small/OtherSkills";

const ProfessionalSummary = () => {
  return (
    <Main>
      <Container>
        <Heading>
          <div
            style={{ marginRight: ".8rem", color: "var(--symph-dark-text)" }}
          >
            Professional
          </div>
          <div style={{ color: "var(--symph-text)" }}>Summary</div>
        </Heading>
        <MainSkill />
        <MajorSkills />
        <OtherSkills />
      </Container>
    </Main>
  );
};

export default ProfessionalSummary;

const Heading = styled.div`
  font-size: 2.5rem;
  font-family: var(--formal-font);
  display: flex;
  justify-content: center;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Container = styled.div`
  width: 90%;
`;

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
