import LoginComponent from './LoginComponent';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import { SomeContext } from './SomeContext';
import { FooterProps } from '../../backend/interfaces';

function Footer(props: FooterProps) {
  const loggedIn = useContext(SomeContext)?.loggedIn,
    [showLogin, setShowLogin] = useState(false),
    [contacts, setContacts] = useState([]),
    [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleClick() {
    setShowLogin(!showLogin);
  }

  useEffect(() => {
    if (loggedIn) {
      setIsLoggedIn(true);
      fetch('http://localhost:8080/contacts')
        .then((response) => response.json())
        .then((result) => {
          setContacts(result);
          console.log(result);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    console.log(props.path);
  }, [props.path]);

  return (
    <FooterDiv>
      {showLogin && !isLoggedIn && <LoginComponent />}
      {props.path === '/blog' && !isLoggedIn && !showLogin && (
        <PrimaryButton type='button' onClick={handleClick}>
          Admin login
        </PrimaryButton>
      )}
      {loggedIn && (
        <NewContactsDiv>
          <p>You have {contacts.length} contacts in your inbox!</p>
        </NewContactsDiv>
      )}
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  margin-top: 20px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const NewContactsDiv = styled.div`
  margin: 10px;

  p {
    font-size: calc(75% + 0.2vw);
    font-weight: bold;
  }
`;

export default Footer;
