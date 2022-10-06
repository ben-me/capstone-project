import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BurgerIcon from '../public/burgermenu.png';
import Image from 'next/future/image';

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  function checkLink(event) {
    if (event.target.pathname === router.pathname) {
      setIsMenuOpen(false);
    }
  }

  return (
    <BurgerMenuStyles>
      <Menu
        customBurgerIcon={<Image src={BurgerIcon} alt="burger-menu" />}
        width={'65%'}
        right
        isOpen={isMenuOpen}
        onStateChange={(state) => setIsMenuOpen(state.isOpen)}
      >
        <Link href="/" passHref>
          <OverlayLink active={'/' === router.pathname} onClick={checkLink}>
            Home
          </OverlayLink>
        </Link>
        <Link href="/rooms" passHref>
          <OverlayLink
            active={'/rooms' === router.pathname}
            onClick={checkLink}
          >
            Rooms
          </OverlayLink>
        </Link>
        <Link href="/reservations" passHref>
          <OverlayLink
            active={'/reservations' === router.pathname}
            onClick={checkLink}
          >
            My Reservations
          </OverlayLink>
        </Link>
      </Menu>
    </BurgerMenuStyles>
  );
}

const OverlayLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.active ? 'red' : 'white')};
`;

const BurgerMenuStyles = styled.div`
  .bm-burger-button {
    position: absolute;
    width: 2.4rem;
    height: 2rem;
    right: 0.7rem;
    top: 1.5rem;
    background-color: transparent;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1em 0;
    font-size: 1.15em;
  }

  /* Wrapper for item list */
  .bm-item-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.3rem;
    text-align: center;
    color: #b8b7ad;
    padding: 0.3em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: #4c474f;
  }
`;
