import React from 'react';
import styled from 'styled-components';
import ReorderIcon from '@material-ui/icons/Reorder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const CatalogWrapped = styled.div`
  color: white;
`;
const CatalogLogo = styled.div`
  display: flex;
  font-size: 30px;
`;
const CatalogTitle = styled.div`
  display: flex;
  padding-top: 4px;
  padding-left: 4px;
  flex-flow: column wrap;
`;
const SmallTitle = styled.span`
  font-size: 12px;
`;
const BigTitle = styled.span`
  font-weight: 600;
  font-size: 13px;
  display: flex;
`;

const IconDropDown = styled(ArrowDropDownIcon)`
  && {
    font-size: 15px;
  }
`;

export default function Catalog() {
  return (
    <CatalogWrapped>
      <CatalogLogo>
        <ReorderIcon style={{ fontSize: 40 }}></ReorderIcon>
        <CatalogTitle>
          <SmallTitle>Danh mục </SmallTitle>
          <BigTitle>
            {/* <span>Sản phẩm</span>
            
            
            sadfasdfa
            sd'f
            asd
            fas
            */}
            <IconDropDown />
          </BigTitle>
        </CatalogTitle>
      </CatalogLogo>
    </CatalogWrapped>
  );
}

// I have just change this code
