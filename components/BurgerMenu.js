import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import styled from 'styled-components';

export default function BurgerMenu() {
  return (
    <BurgerMenuStyles>
      <Menu width={'65%'} right>
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
    </BurgerMenuStyles>
  );
}

const OverlayLink = styled.a`
  text-decoration: none;
  color: white;
`;

const BurgerMenuStyles = styled.div`
  .bm-burger-button {
    position: absolute;
    width: 2.4rem;
    height: 2rem;
    right: 0.4rem;
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
