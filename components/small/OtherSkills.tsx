import React from "react";
import styled from "@emotion/styled";

import SmallCards from "./SmallCards";

const techList = [
  {
    image: "https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg",
    title: "React.js",
    description:
      " I have extensive experience and proficiency in React.js, a powerful JavaScript library that enables the creation of interactive and dynamic user interfaces. With React.js, I can efficiently develop scalable and modular applications using its component-based architecture and virtual DOM.",
    buttons: 1,
  },
  {
    image: "https://wallpapercave.com/wp/wp6606918.jpg",
    title: "Node.js",
    description:
      "I possess in-depth knowledge and expertise in Node.js, a runtime environment that allows for server-side JavaScript execution. With Node.js, I can build robust and efficient server-side applications, APIs, and real-time systems. I am skilled in utilizing the event-driven, non-blocking I/O model of Node.js to handle concurrent requests and deliver high-performance applications.",
    buttons: 2,
  },
  {
    image: "https://wallpapercave.com/wp/wp11846966.jpg",
    title: "Next.js",
    description:
      "I am highly proficient in Next.js, a popular React framework that provides server-side rendering and static site generation capabilities. With Next.js, I can build optimized and SEO-friendly web applications that offer fast page load times and improved performance. I have experience leveraging the features of Next.js, such as API routes and automatic code splitting, to develop dynamic and scalable web projects.",
    buttons: 2,
  },
  {
    image:
      "https://www.thecodedeveloper.com/wp-content/uploads/2017/01/cakephp-4.jpg",
    title: "CakePHP",
    description:
      "I have significant expertise in CakePHP, a PHP framework that simplifies and accelerates web application development. With CakePHP, I can efficiently create robust and maintainable web applications by following the framework's conventions and utilizing its built-in features for data handling, security, and MVC architecture. I am skilled in leveraging CakePHP's powerful ORM (Object-Relational Mapping) for seamless database integration.",
    buttons: 2,
  },
  {
    image: "https://images.hdqwalls.com/wallpapers/python-logo-4k-i6.jpg",
    title: "Python",
    description:
      "I am well-versed in Python, a versatile and high-level programming language known for its simplicity and readability. With Python, I can develop a wide range of applications, including web applications, data analysis scripts, automation tools, and machine learning models. I am proficient in utilizing Python's extensive standard library and various frameworks to build efficient and scalable solutions.",
    buttons: 1,
  },
];

const OtherSkills = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100rem",
      }}
    >
      <Header>Proficient in the following technologies</Header>
      <Main>
        {techList.map((item) => (
          <SmallCards
            key={item.title}
            image={item.image}
            title={item.title}
            desciption={item.description}
            buttons={item.buttons}
          />
        ))}
      </Main>
    </div>
  );
};

export default OtherSkills;

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
