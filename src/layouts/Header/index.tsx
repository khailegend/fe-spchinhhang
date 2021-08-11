import React from 'react';
import styled from 'styled-components';
import Catalog from './Catalog';
const HeaderWrapped = styled.div`
  background: #1A94FF;
  padding: 25px;
`

export default function Header() {
  return (
    <HeaderWrapped>
      <Catalog></Catalog>
    </HeaderWrapped>
  );
}
