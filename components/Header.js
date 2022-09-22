import styled from 'styled-components';

export default function Header({ title }) {
  return <Headline>{title}</Headline>;
}

const Headline = styled.h1`
  margin-top: 2.7em;
  text-align: center;
  margin-bottom: 51px;
`;
