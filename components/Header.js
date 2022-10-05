import styled from 'styled-components';

export default function Header({ title }) {
  return <Headline>{title}</Headline>;
}

const Headline = styled.h1`
  text-align: center;
  margin-top: 0;
  padding-top: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;
