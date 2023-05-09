import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import { AnimatePresence, motion } from 'framer-motion';
import { Project, Params } from '../../backend/interfaces';

function Work() {
  const [project, setProject] = useState<Project | null>(null),
    { projectId } = useParams<Params>();

  useEffect(() => {
    fetch(`http://localhost:8080/work/${projectId}`)
      .then((response) => response.json())
      .then((result) => {
        setProject(result);
      });
  }, [projectId]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <main>
          <HeaderDiv>
            <h1>Work</h1>
            <div>
              <hr />
            </div>
          </HeaderDiv>
          {project !== null && (
            <WorkDiv>
              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div>
                  {project.languages.map((language) => (
                    <span key={language}>/ {language} </span>
                  ))}
                </div>
                {project.participants.length > 0 && (
                  <div>
                    <h3>Created together with:</h3>
                    <ul>
                      {project.participants.map((participant) => (
                        <li key={participant}> / {participant} </li>
                      ))}
                    </ul>
                  </div>
                )}
                <PrimaryButton type='button'>
                  <a href={project.url} rel='noreferrer' target='_blank'>
                    {/* Go to website */}
                    Funkar bara på gh!
                  </a>
                </PrimaryButton>
              </div>
              <div>
                <img alt={project.id} src={project.image}></img>
              </div>
            </WorkDiv>
          )}
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

const WorkDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin-top: 60px;

  div {
    width: 45%;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  div > div {
    width: 100%;
    margin: 20px 0 20px 0;
  }

  h2 {
    font-size: calc(90% + 3vw);
    text-transform: uppercase;
  }

  h3 {
    font-size: calc(80% + 1vw);
  }

  span,
  li {
    display: inline-block;
    margin-right: 5px;
    font-weight: bold;
  }

  img {
    width: 100%;
    opacity: 0.6;
  }

  @media (max-width: 1300px) {
    align-items: flex-start;

    div {
      margin-right: 20px;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column-reverse;

    div {
      width: 90%;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 90%;
      min-width: 250px;
    }
  }
`;

export default Work;
