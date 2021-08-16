import React from 'react';
import styled from 'styled-components';
import ReorderIcon from '@material-ui/icons/Reorder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';

const CatalogWrapped = styled.div`
  color: white;
  cursor: pointer;
`;
const CatalogLogo = styled.a`
  display: flex;
  font-size: 30px;
  align-items: center;
  font-size: 13px;
`;
const CatalogTitle = styled.div`
  display: flex;
  padding-top: 4px;
  padding-left: 4px;
  flex-flow: column wrap;
`;
const SmallTitle = styled.span`
  font-size: 11px;
`;
const BigTitle = styled.span`
  font-weight: 500;
  font-size: 13px;
  display: flex;
`;

const IconDropDown = styled(ArrowDropDownIcon)`
  && {
    font-size: 15px;
  }
`;

const CatalogMenu = styled(Menu)`
  && {
    margin-top: 4%;
    padding: 0;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  background-color: white;
  border-color: white;
  color: black;
  border-style: solid solid none;
  border-width: 1px 1px 0px;
  display: list-item;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #1a94ff;
    border-color: #1a94ff;
    color: white;
  }
`;

const MenuLink = styled.a`
  align-items: center;
  display: flex;
`;

const MenuTitle = styled.span`
  line-height: 14.95px;
  padding: 10px 10px;
`;

export default function Catalog() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CatalogWrapped>
      <CatalogLogo onMouseOver={handleClick} aria-controls="fade-menu" aria-haspopup="true">
        <ReorderIcon style={{ fontSize: 40 }}></ReorderIcon>
        <CatalogTitle>
          <SmallTitle>Danh mục </SmallTitle>
          <BigTitle>
            <span>Sản phẩm</span>
            <IconDropDown />
          </BigTitle>
        </CatalogTitle>
      </CatalogLogo>

      <CatalogMenu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <MenuLink>
            <MenuTitle>Điện thoại - Máy tính bảng</MenuTitle>
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuLink>
            <MenuTitle>Điện tử - Điện lạnh</MenuTitle>
          </MenuLink>
        </MenuItem>
      </CatalogMenu>
    </CatalogWrapped>
  );
}
