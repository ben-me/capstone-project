import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import backArrow from '../public/backarrow.png';

export default function BackButton({ page }) {
  return (
    <Link href={page} passHref>
      <BackAnchor>
        <Image alt="backbutton" src={backArrow} />
      </BackAnchor>
    </Link>
  );
}

const BackAnchor = styled.a`
  display: inline-block;
  position: absolute;
  left: 0px;
  z-index: 1;
  top: 16px;
`;
