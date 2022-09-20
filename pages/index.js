import Link from 'next/link';
import { React, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Link href="/rooms">
        <Button>Show all rooms</Button>
      </Link>
    </Container>
  );
}

const Button = styled.button`
  padding: 3em;
  font-size: xx-large;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
