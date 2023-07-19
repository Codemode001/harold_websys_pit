import React from "react";
import styled from "@emotion/styled";

import SkillsCard from "./SkillsCard";

const MajorSkills = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "66rem",
      }}
    >
      <Header>Major Skills</Header>
      <Main>
        <SkillsCard
          image="https://st3.depositphotos.com/16417992/32153/i/450/depositphotos_321530996-stock-photo-back-end-project-architecture-development.jpg"
          title="RDBMS Integration and Management"
          desciption=" With expertise in RDBMS Integration and Management, I specialize in seamlessly integrating and managing Relational Database Management Systems (RDBMS) to ensure efficient data storage, retrieval, and manipulation. From designing robust database architectures to implementing effective data integration strategies, I excel in optimizing database performance, ensuring data integrity, and facilitating seamless data flow between various systems. With a keen eye for database optimization and a deep understanding of SQL and data modeling techniques, I am committed to delivering scalable and reliable solutions for businesses, enabling them to harness the power of their data effectively."
          variant="primary"
          buttons={2}
        />
        <SkillsCard
          image="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          title="Software Development"
          desciption="As a skilled Software Developer, I possess a strong proficiency in designing and developing robust software solutions tailored to meet the unique needs of businesses. With expertise in various programming languages and frameworks, I excel in writing clean and efficient code that delivers optimal performance and scalability. From conceptualization to deployment, I am involved in the entire software development lifecycle, collaborating with cross-functional teams to gather requirements, architect solutions, and conduct thorough testing. With a keen eye for detail and a passion for problem-solving, I am dedicated to delivering high-quality software applications that streamline processes, enhance user experiences, and drive business growth."
          variant="secondary"
          buttons={2}
        />
      </Main>
    </div>
  );
};

export default MajorSkills;

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
  width: 100%;
`;

const Main = styled.div`
  height: 30rem;
  width: 90%;
`;
