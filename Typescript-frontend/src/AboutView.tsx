import React from 'react';
// import { useEffect, useState } from "react";
// import moment from "moment";
import { useContext } from 'react';
import { SomeContext } from './SomeContext';
import styled from 'styled-components';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { MyComponentProps } from '../../backend/interfaces';

function AboutView() {
  const details = useContext(SomeContext)?.details,
    misc = useContext(SomeContext)?.misc,
    theme = useContext(SomeContext)?.theme;
  // ---Tänkte ha med min ålder, men skippade :) ---
  // const [years, setYears] = useState("");

  // useEffect(() => {
  //   if (details) {
  //     const diffYears = moment().diff(details.age, "years") * 1;
  //     setYears(diffYears.toString());
  //   }
  // }, [details]);

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ delay: 0.3, ease: easeInOut, duration: 1.3 }}
      >
        <main>
          <HeaderDiv>
            <h1>About</h1>
            <div>
              <hr />
            </div>
          </HeaderDiv>
          <AboutDiv>
            {misc && misc !== null && (
              <div>
                <IntroParagraph>{misc.introdescription}</IntroParagraph>
                {misc.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
            {details && details !== null && (
              <ImageDiv>
                <img alt='Klara' src={details.image[0]}></img>
                <SkillDiv
                  ThemeColor={
                    theme === 'light'
                      ? 'rgba(211, 206, 194, 0.7)'
                      : 'rgb(254, 105, 5)'
                  }
                >
                  {misc && misc !== null && (
                    <ul>
                      {misc.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </SkillDiv>
                {/* <h2>{details.name}</h2> */}
                {/* {years !== "" && <p>{years} years</p>}
            <ul>
              <li>{details.email}</li>
            </ul> */}
              </ImageDiv>
            )}
          </AboutDiv>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  div {
    width: 70%;
    padding-bottom: 1.2%;
  }

  @media (max-width: 500px) {
    div {
      width: 60%;
      padding-bottom: 0;
    }
  }
`;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;

  div {
    width: 50%;
    padding-right: 70px;
  }

  p:nth-child(4),
  p:nth-child(7) {
    /* font-size: 1.3rem; */
    /* font-size: 1.7vw; */
    font-size: calc(90% + 0.7vw);
    font-family: NewYork, serif;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 50px;

    div {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    margin-top: 20px;

    div {
      padding-right: 40px;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;

const IntroParagraph = styled.p`
  /* font-size: 2rem; */
  /* font-size: 2.3vw; */
  font-size: calc(90% + 1.2vw);
  font-family: NewYork, serif;
`;

const ImageDiv = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      object-fit: contain;
    }
  }
`;

const SkillDiv = styled.div<MyComponentProps>`
  width: 95% !important;
  padding: 0 !important;
  margin: auto !important;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; */
    /* flex-direction: column;
    align-items: flex-end; */
  }

  li {
    margin: auto;
    font-size: calc(75% + 0.1vw);
    background-color: ${(props) => props.ThemeColor};
    aspect-ratio: 1/1;
    border-radius: 50%;
    width: 120px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 30px;
    /* margin-right: 20px; */
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    ul {
      grid-template-columns: 1fr 1fr;
      /* align-items: flex-start; */
    }
  }

  @media (max-width: 1000px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 500px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export default AboutView;
