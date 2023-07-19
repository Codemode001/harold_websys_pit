import React from "react";
import styled from "@emotion/styled";

import UpdatesCards from "../components/small/UpdatesCards";

const projects = [
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665469/projects/Screenshot_2023-07-18_151729_rygofl.png",
    title:
      "CDO Rend Finder, A website that helps people to find their new place",
  },
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665474/projects/Screenshot_2023-07-18_150746_avm3ms.png",
    title: "AFG Charity, to help families and children that are in need",
  },
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665472/projects/Screenshot_2023-07-18_151431_gdxt6p.png",
    title: "Bordeaux modern and cool looking website",
  },
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665472/projects/Screenshot_2023-07-18_151026_nzvtby.png",
    title: "AFG news, to deliver new news to people in afg",
  },
  // {
  //   image:
  //     "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665471/projects/Screenshot_2023-07-18_151316_kdf27d.png",
  //   title: "Car collection page for car lovers",
  // },
];

const projects2 = [
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665471/projects/Screenshot_2023-07-18_151525_x5d6xc.png",
    title: "ASOR vanilla webpage to react web application",
  },
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665469/projects/Screenshot_2023-07-18_151457_pq5nyf.png",
    title: "Firebase + react to create UI for easy database CRUD",
  },
  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665470/projects/Untitled_qfk6ty.png",
    title: "Pianogod.com to helo musicians improve their play",
  },

  {
    image:
      "https://res.cloudinary.com/dhhamkkue/image/upload/v1689665471/projects/Screenshot_2023-07-18_151316_kdf27d.png",
    title: "Car collection page to display favorite cars",
  },
];

const Updates = () => {
  return (
    <Main>
      <UpdatesTitle>
        <div className="w-[90%] h-full flex items-center">
          Me as a{" "}
          <div style={{ color: "var(--symph-text)", marginLeft: ".8rem" }}>
            developer
          </div>
        </div>
      </UpdatesTitle>
      <CardsContainer>
        <Container>
          {projects.map((item) => (
            <UpdatesCards imgSource={item.image} projTitle={item.title} />
          ))}
        </Container>
        <Container>
          {projects2.map((item) => (
            <UpdatesCards imgSource={item.image} projTitle={item.title} />
          ))}
        </Container>
        <ViewUpdates>View previous Updates</ViewUpdates>
      </CardsContainer>
    </Main>
  );
};

export default Updates;

const ViewUpdates = styled.button`
  background-color: var(--ustp-bg);
  height: 2.5rem;
  width: 90%;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--ustp-yellow);
  margin-bottom: 2rem;
  transition: 0.2s ease-in-out;

  :hover {
    color: var(--ustp-bg);
    background-color: var(--ustp-yellow);
  }
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: var(--light-gray-background);
`;

const UpdatesTitle = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-family: var(--formal-font);
  font-weight: 700;
  color: var(--symph-dark-text);
`;

const Main = styled.div`
  min-height: 80vh;
`;
