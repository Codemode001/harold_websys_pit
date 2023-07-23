import React from "react";
import styled from "@emotion/styled";

const Govern = () => {
  return (
    <Main>
      <Container>
        <Section>
          <img src="https://res.cloudinary.com/dhhamkkue/image/upload/v1690088247/samples/ustp%20footer%20links/footlogo_zglhyt.png" />
        </Section>
        <Section>
          <h1>REPUBLIC OF THE PHILIPPINES</h1>
          <p>All content is in the public domain unless otherwise stated.</p>
          <p>Privacy Policy</p>
        </Section>
        <Section>
          <h1>About GOV.PH</h1>
          <p>
            Learn more about the Philippine government, its structure, how
            government works, and the people behind it.
          </p>
          <ul>
            <li>GOV.PH </li>
            <li>Official Gazette</li>
            <li>Open Data Portal</li>
            <li>Send us your feedback</li>
          </ul>
        </Section>
        <Section>
          <h1>Government Links</h1>
          <ul style={{ fontSize: ".9rem" }}>
            <li className="other-links">Office of the President</li>
            <li className="other-links">Office of the Vice President</li>
            <li className="other-links">Senate of the Philippines</li>
            <li className="other-links">House of Representatives</li>
            <li className="other-links">Supreme Court</li>
            <li className="other-links">Court of Appeals</li>
            <li className="other-links">Sandiganbayan</li>
          </ul>
        </Section>
        <Section>
          <div className="flex">
            <Images src="https://res.cloudinary.com/dhhamkkue/image/upload/v1690089091/samples/ustp%20footer%20links/Coat_of_arms_of_the_Philippines-pl6i72ssnd01iwbnufbmgcgvdpcrznszgh0fyzr31k_dsovku.png" />
            <Images src="https://res.cloudinary.com/dhhamkkue/image/upload/v1690089091/samples/ustp%20footer%20links/ts-oqcvloq2n7ccin6o21i2dpij79f8yurrpeictui4ja_xng2jt.png" />
          </div>
          <div className="flex">
            <Images src="https://res.cloudinary.com/dhhamkkue/image/upload/v1690089091/samples/ustp%20footer%20links/fio-oqcvlpnwyf9a01yocfzt5t5twdps1q72mpmcx9igd6_hmzlun.png" />
            <Images src="https://res.cloudinary.com/dhhamkkue/image/upload/v1690089091/samples/ustp%20footer%20links/finalcharter-otsxkvcqdu0vwhcth2o2pbf7rhrlutkn3fy2p00o2g_qbdtbn.png" />
          </div>
          <img
            style={{
              width: "100%",
              height: "20%",
              marginTop: "1rem",
              objectFit: "cover",
            }}
            src="https://res.cloudinary.com/dhhamkkue/image/upload/v1690089091/samples/ustp%20footer%20links/arta-otsx08s92u3xqfl2w6g4r4zk4of6rdfkfksb35evm2_xo4ks6.png"
          />
        </Section>
      </Container>
    </Main>
  );
};

export default Govern;

const Images = styled.img`
  width: 7rem;
  height: 7rem;
`;

const Section = styled.div`
  width: 19%;

  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
  }

  p {
    color: white;
    font-weight: 200;
    margin: 1rem 0;
  }

  ul {
    color: white;
    font-size: 0.8rem;
    font-weight: 200;
  }

  li {
    cursor: pointer;
    margin: 4px 0;
  }
  .other-links {
    margin: 0.8rem 0;
  }
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding-top: 6rem;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-bottom: 1rem;
`;
