import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import styled from 'styled-components';

export default function BurgerMenu() {
  return (
    <Menu width={'50%'} right>
      <Link href="/" passHref>
        <OverlayLink>Home</OverlayLink>
      </Link>
      <Link href="/rooms" passHref>
        <OverlayLink>Show rooms</OverlayLink>
      </Link>
      <Link href="/reservations" passHref>
        <OverlayLink>My Reservations</OverlayLink>
      </Link>
    </Menu>
  );
}

const OverlayLink = styled.a`
  text-decoration: none;
  color: white;
`;
