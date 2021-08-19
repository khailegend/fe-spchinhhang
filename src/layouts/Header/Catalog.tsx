import React from 'react';
import styled from 'styled-components';
import ReorderIcon from '@material-ui/icons/Reorder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TvSharpIcon from '@material-ui/icons/TvSharp';

const CatalogWrapped = styled.div`
  color: white;
  cursor: pointer;
`;
const CatalogLogo = styled.a`
  display: flex;
  font-size: 30px;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
`;
const CatalogTitle = styled.div`
  display: flex;
  padding-top: 4px;
  padding-left: 4px;
  flex-flow: column wrap;
`;
const SmallTitle = styled.span`
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
`;
const BigTitle = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
`;

const IconDropDown = styled(ArrowDropDownIcon)`
  && {
    font-size: 15px;
  }
`;

const CatalogMenu = styled(Menu)`
  && {
    display: flex;
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
  }
`;

const MenuLink = styled.a`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  z-index: 2;
  color: rgb(68, 68, 68);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0px;
  text-decoration: none;
  height: 100%;
  &:hover {
    color: white;
  }
`;

const MenuTitle = styled.span`
  line-height: 14.95px;
  padding: 10px 10px;
`;

const IconWrap = styled.span`
  text-align: center;
  width: 39px;
`;

export default function Catalog() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CatalogWrapped>
      <CatalogLogo
        onClick={handleClick}
        onMouseOver={handleClick}
        aria-controls="catalog-menu"
        aria-haspopup="true">
        <ReorderIcon style={{ fontSize: 40 }}></ReorderIcon>
        <CatalogTitle>
          <SmallTitle>Danh Mục </SmallTitle>
          <BigTitle>
            <span>Sản Phẩm</span>
            <IconDropDown />
          </BigTitle>
        </CatalogTitle>
      </CatalogLogo>
      <CatalogMenu
        id="catalog-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}>
        <MenuItem onClick={handleClose}>
          <MenuLink>
            <IconWrap>
              <PhoneAndroidIcon />
            </IconWrap>
            <MenuTitle>Điện thoại - Máy tính bảng</MenuTitle>
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuLink>
            <IconWrap>
              <TvSharpIcon />
            </IconWrap>
            <MenuTitle>Điện tử - Điện lạnh</MenuTitle>
          </MenuLink>
        </MenuItem>
      </CatalogMenu>
    </CatalogWrapped>
  );
}
