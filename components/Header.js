import styled from 'styled-components';

export default function Header({ title }) {
  return <Headline>{title}</Headline>;
}

const Headline = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;
