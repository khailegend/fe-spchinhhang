import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProductCard from 'components/ProductCard';
const ProductsWrapper = styled.div`
  margin-top: 16px;
`;

const Title = styled(Grid)`
  display: flex;
  padding: 10px 16px;
  background-color: white;
  flex: 1 1 0%;
  font-size: 20px;
  line-height: 28px;
  text-transform: capitalize;
  margin-bottom: 4px;
  border-radius: 4px;
`;

const ProductItem = styled.a`
  text-decoration: none;
  display: flex;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  :hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px;
    z-index: 1;
  }
`;
export default function SuggestProducts() {
  return (
    <ProductsWrapper>
      <Grid container>
        <Grid item xs={12}>
          <Title>
            <span>Sản Phẩm Gợi Ý</span>
          </Title>
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: 'white' }}>
        <Grid item xs={2}>
          <ProductItem>
            <ProductCard />
          </ProductItem>
        </Grid>
        <Grid item xs={2}>
          <ProductItem>
            <ProductCard />
          </ProductItem>
        </Grid>
        <Grid item xs={2}>
          <ProductItem>
            <ProductCard />
          </ProductItem>
        </Grid>
        <Grid item xs={2}>
          <ProductItem>
            <ProductCard />
          </ProductItem>
        </Grid>
        <Grid item xs={2}>
          <ProductItem>
            <ProductCard />
          </ProductItem>
        </Grid>
        <Grid item xs={2}>
          <ProductItem>
            <ProductCard />
          </ProductItem>
        </Grid>
        <Grid item xs={2}>
          <ProductItem>
            <ProductCard />
          </ProductItem>
        </Grid>
      </Grid>
    </ProductsWrapper>
  );
}
