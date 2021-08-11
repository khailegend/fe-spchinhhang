import React from 'react';
import styled from 'styled-components';
import Catalog from './Catalog';
const HeaderWrapped = styled.div`
  background: #1a94ff;
  padding: 25px;
`;

export default function Header() {
  return (
    <HeaderWrapped>
      <Catalog />
    </HeaderWrapped>
  );
}
