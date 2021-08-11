import React from 'react';
import styled from 'styled-components';
import { makeStyles, Theme } from '@material-ui/core/styles'
import ReorderIcon from '@material-ui/icons/Reorder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme: Theme) => ({
    listIcon: {
        fontSize: 10
    }
}));


const CatalogWrapped = styled.div`
  color: white;
`
const LogoCatalog = styled.div`
  display: flex;
  font-size: 30px; 
`
const TitleCatalog = styled.div`
  display: flex;
  padding-top: 4px;
  padding-left: 4px;
  flex-flow: column wrap;
`
const SmallTitle = styled.span`
  font-size: 12px;
`
const BigTitle = styled.span`
  font-weight: 600;
  font-size: 13px;  
`

export default function Catalog() {
    const classes = useStyles();
    return (
        <CatalogWrapped>
            <LogoCatalog>
                <ReorderIcon style={{ fontSize: 40 }} ></ReorderIcon>
                <TitleCatalog>
                    <SmallTitle>Danh mục </SmallTitle>
                    <BigTitle >Sản phẩm  <ArrowDropDownIcon className={classes.listIcon} /></BigTitle>


                </TitleCatalog>
            </LogoCatalog>
        </CatalogWrapped>
    );
}