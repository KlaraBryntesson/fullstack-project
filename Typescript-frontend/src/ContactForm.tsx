import React, { useState, useContext } from 'react';
import PrimaryButton from './PrimaryButton';
import styled from 'styled-components';
import { SomeContext } from './SomeContext';
import { MyComponentProps } from '../../backend/interfaces';

function ContactForm() {
  const [name, setName] = useState(''),
    [email, setEmail] = useState(''),
    [phone, setPhone] = useState(''),
    [message, setMessage] = useState(''),
    [showError, setShowError] = useState(false),
    [showSuccess, setShowSuccess] = useState(false),
    theme = useContext(SomeContext)?.theme;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    if (name === '' || email === '' || phone === '' || message === '') {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      }).then((response) => {
        console.log(response);
      });
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }

  return (
    <>
      <FormDiv
        action='http://localhost:8080/contact'
        method='POST'
        ThemeColor={theme === 'light' ? 'rgb(42, 42, 42)' : 'antiquewhite'}
        onSubmit={handleSubmit}
      >
        <label>
          Name
          <input
            onChange={(event) => setName(event.target.value)}
            name='name'
            value={name}
            required
          />
        </label>
        <label>
          Email
          <input
            type='email'
            onChange={(event) => setEmail(event.target.value)}
            name='email'
            value={email}
            required
          />
        </label>
        <label>
          Phone
          <input
            type='tel'
            onChange={(event) => setPhone(event.target.value)}
            name='phone'
            value={phone}
            required
          />
        </label>
        <label>
          Message
          <textarea
            rows={4}
            onChange={(event) => setMessage(event.target.value)}
            name='message'
            value={message}
            required
          />
        </label>
        <PrimaryButton type='submit'>Send Inquiry</PrimaryButton>
        {showError && (
          <p className='Contact-message'>All fields must be filled in!</p>
        )}
        {showSuccess && (
          <p className='Contact-message'>Thank you for your inquiry!</p>
        )}
      </FormDiv>
    </>
  );
}

const FormDiv = styled.form<MyComponentProps>`
  width: 100%;
  position: relative;
  padding: 25px;
  margin-top: 10px;

  label {
    width: 80%;
    min-width: 250px;
    max-width: 450px;
    border-bottom: 1px solid ${(props) => props.ThemeColor};
  }

  /* label:nth-child(2) {
    height: 70px;
  } */

  @media (max-width: 1100px) {
    padding: 0;
  }
`;

export default ContactForm;
