import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Link href="/rooms" passHref>
        <Anchor>Show all rooms</Anchor>
      </Link>
    </Container>
  );
}

const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  padding: 1em;
  max-width: 310px;
  font-size: xx-large;
  border: 1px rgba(101, 181, 255, 1) solid;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(101, 181, 255, 0.4);
  background-color: white;
  transition: 0.4s;
  text-decoration: none;
  color: black;
  text-align: center;
  &:hover {
    background-color: rgba(101, 181, 255, 1);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
