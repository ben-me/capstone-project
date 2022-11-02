import styled from 'styled-components';
import Background from '../components/Background';

export default function Login() {
  function handleSubmit() {}

  return (
    <>
      <Background />
      <StyledDiv>
        <LoginForm onSubmit={handleSubmit}>
          <InputDiv>
            <StyledLabel htmlFor="user">Username: </StyledLabel>
            <StyledInput
              type="text"
              name="user"
              placeholder="Your username"
              maxLength={16}
              minLength={4}
            />
            <StyledLabel htmlFor="password">Password: </StyledLabel>
            <StyledInput
              type="password"
              name="password"
              placeholder="Your password"
              maxlength={24}
              minLength={6}
            />
          </InputDiv>
          <ButtonDiv>
            <StyledButton>Register</StyledButton>
            <StyledButton type="submit">Log In</StyledButton>
          </ButtonDiv>
        </LoginForm>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
`;

const LoginForm = styled.form`
  position: absolute;
  max-width: 19.375rem;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  /* border: 1px black solid; */
  border-radius: 0.7rem;
  box-shadow: 4px 4px 2rem 2px black;
  background-color: white;
`;

const InputDiv = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: auto auto;
`;

const StyledLabel = styled.label`
  padding: 5px;
  grid-column-start: 1;
  align-self: center;
  color: var(--primary);
`;

const StyledInput = styled.input`
  background-color: white;
  border-radius: 4px;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
`;

const StyledButton = styled.button`
  border-radius: 0.5rem;
  border: 1px rgba(101, 181, 255, 1) solid;
  padding: 0.4rem 2rem;
  border: 1px solid var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--primary);
  color: white;
  font-size: large;
`;
