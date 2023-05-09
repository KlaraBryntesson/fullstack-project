import { Formik } from 'formik';
import { useContext } from 'react';
import { SomeContext } from './SomeContext';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import { MyComponentProps } from '../../backend/interfaces';

function LoginComponent() {
  const setLoggedIn = useContext(SomeContext)?.setLoggedIn,
    theme = useContext(SomeContext)?.theme,
    adminUser = useContext(SomeContext)?.user;

  return (
    <Formik
      initialValues={{ userName: '', password: '' }}
      onSubmit={(values) => {
        if (adminUser) {
          if (
            values.userName === adminUser.nickName &&
            values.password === adminUser.password
          ) {
            console.log(adminUser);
            console.log(`Välkommen ${adminUser.nickName}`);
            setLoggedIn?.(true);
          } else {
            console.log(adminUser);
            console.log('WRONG USER');
          }
        }
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Form
          ThemeColor={theme === 'light' ? 'rgb(42, 42, 42)' : 'antiquewhite'}
          onSubmit={handleSubmit}
        >
          <label>
            Username
            <input
              name='userName'
              value={values.userName}
              onChange={handleChange}
              type='text'
            />
          </label>
          <label>
            Password
            <input
              name='password'
              value={values.password}
              onChange={handleChange}
              type='text'
            />
          </label>
          <PrimaryButton type='submit'>Logga in</PrimaryButton>
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form<MyComponentProps>`
  width: 350px;
  background-color: inherit;

  label {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.ThemeColor};
  }

  input {
    width: 250px;
  }
`;

export default LoginComponent;
