import Link from 'next/link';
import styled from 'styled-components';
import Background from '../components/Background';

export default function register() {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const userInput = form.user.value;
    const passwordInput = form.password.value;
    const emailInput = form.email.value;

    const newUser = {
      name: userInput,
      password: passwordInput,
      email: emailInput,
    };

    await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Creation failed') {
        }
      });
    form.reset();
  }

  return (
    <>
      <Background />
      <StyledDiv>
        <RegisterForm onSubmit={handleSubmit}>
          <StyledTitle>Register a new user</StyledTitle>
          <InputDiv>
            <StyledLabel htmlFor="user">Username:</StyledLabel>
            <StyledInput
              name="user"
              type="text"
              placeholder="Username"
              maxLength={16}
              minLength={4}
            />
            <StyledLabel htmlFor="password">Password:</StyledLabel>
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
              maxLength={16}
              minLength={4}
            />
            <StyledLabel htmlFor="email">E-Mail:</StyledLabel>
            <StyledInput
              name="email"
              type="email"
              placeholder="yourMail@mail.com"
              maxLength={16}
              minLength={4}
            />
          </InputDiv>
          <ButtonDiv>
            <Link href={'/login'}>
              <StyledLink>Cancel</StyledLink>
            </Link>
            <StyledButton type="submit">Sign up</StyledButton>
          </ButtonDiv>
        </RegisterForm>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
`;

const RegisterForm = styled.form`
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

const StyledTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  text-align: center;
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
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px rgba(101, 181, 255, 1) solid;
  padding: 0.4rem 2rem;
  border: 1px solid var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--primary);
  color: white;
  font-size: large;
`;

const StyledLink = styled.a`
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px rgba(101, 181, 255, 1) solid;
  padding: 0.4rem 1.5rem;
  border: 1px solid var(--primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--primary);
  color: white;
  font-size: large;
`;
