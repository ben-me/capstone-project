import Link from 'next/link';
import styled from 'styled-components';
import Background from '../components/Background';
import BurgerMenu from '../components/BurgerMenu';

export default function Home() {
  return (
    <Container>
      <BurgerMenu />
      <Background />
      <Link href="/rooms" passHref>
        <Anchor>Show all rooms</Anchor>
      </Link>
    </Container>
  );
}

const Anchor = styled.a`
  position: absolute;
  bottom: 7.125rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  max-height: 6.25rem;
  padding: 1.5rem;
  max-width: 19.375rem;
  font-size: xx-large;
  border: 1px rgba(101, 181, 255, 1) solid;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(101, 181, 255, 0.4);
  background-color: #65b5ff;
  transition: 0.4s;
  text-decoration: none;
  color: white;
  text-align: center;
`;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;
