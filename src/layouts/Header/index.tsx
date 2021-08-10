import React from 'react';
import styled from 'styled-components';

const HeaderWrapped = styled.div`
  background: cornflowerblue;
  padding: 15px;
`

export default function Header() {
  return (
    <HeaderWrapped>
      This is header
    </HeaderWrapped>
  );
}
