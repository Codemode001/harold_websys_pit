import React from "react";
import styled from "@emotion/styled";

const images = [
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086872/samples/ustp%20footer%20links/ustep-logo_ndejvs.png",
    name: "USTeP",
  },
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086873/samples/ustp%20footer%20links/prisms-logo_u8kn9w.png",
    name: "PRISMS",
  },
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086873/samples/ustp%20footer%20links/admissions-logo_lnryfb.png",
    name: "ADMISSIONS",
  },
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086873/samples/ustp%20footer%20links/hris-logo_kulkw6.png",
    name: "HRIS",
  },
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086873/samples/ustp%20footer%20links/eclearance-logo_ykaytr.png",
    name: "eCLEARANCE",
  },
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086873/samples/ustp%20footer%20links/hims-logo_bji90w.png",
    name: "HIMS",
  },
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086872/samples/ustp%20footer%20links/iperform-logo_wfibe1.png",
    name: "iPERFORM",
  },
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086872/samples/ustp%20footer%20links/helpdesk-logo_xsaaos.png",
    name: "HELPDESK",
  },
  {
    img: "https://res.cloudinary.com/dhhamkkue/image/upload/v1690086872/samples/ustp%20footer%20links/BAC_aprhxw.png",
    name: "BAC",
  },
];

const Links = () => {
  return (
    <Main>
      <Container>
        {" "}
        {images.map((item) => (
          <div key={item.name}>
            <img src={item.img} alt="logo" style={{ width: "7rem" }} />
            <div className="flex justify-center">{item.name}</div>
          </div>
        ))}
      </Container>
    </Main>
  );
};

export default Links;

const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  background-color: #fcb316;
`;
