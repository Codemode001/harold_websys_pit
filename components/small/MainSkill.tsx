import React from "react";
import styled from "@emotion/styled";

import SkillsCard from "./SkillsCard";

const MainSkill = () => {
  return (
    <div>
      <Header>Main Specialization</Header>
      <Main>
        <SkillsCard
          image="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
          title="Web Development"
          desciption=" As a web development specialist, I bring a wealth of expertise in
      designing and building highly functional and visually appealing
      websites. With a strong foundation in front-end and back-end
      technologies, I have the skills to create dynamic and responsive web
      applications. My proficiency extends to HTML, CSS, JavaScript, and
      various frameworks such as React and Angular. I am experienced in
      database integration, ensuring seamless data management and storage.
      With a keen eye for user experience and a focus on delivering
      innovative solutions, I strive to create engaging and user-friendly
      web experiences that exceed client expectations."
          variant="primary"
          buttons={1}
        />
      </Main>
    </div>
  );
};

export default MainSkill;

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
  margin-top: 1rem;
`;

const Main = styled.div`
  height: 30rem;
`;
