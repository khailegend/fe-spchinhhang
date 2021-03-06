import React from 'react';
import styled from 'styled-components';
import Catalog from './Catalog';
import SearchBar from './SearchBar';
import Logo from './Logo';
const HeaderWrapped = styled.header`
  background: #1a94ff;
  padding: 20px 54.5px;
`;

const Container = styled.div`
  display: flex;
  max-width: 1270px;
  margin: auto;
`;

export default function Header() {
  return (
    <HeaderWrapped>
      <Container>
        <Logo />
        <Catalog />
        <SearchBar />
      </Container>
    </HeaderWrapped>
  );
}
