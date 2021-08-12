import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ProductCard from "components/ProductCard";
const ProductsWrapper = styled.div`
  margin-top: 20px;
  background: green;
`;
export default function SuggestProducts() {
  return (
    <ProductsWrapper>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper>Sản Phẩm Gợi Ý</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <ProductCard />
        </Grid>
        <Grid item xs>
          <ProductCard />
        </Grid>
        <Grid item xs>
          <ProductCard />
        </Grid>
        <Grid item xs>
          <ProductCard />
        </Grid>
        <Grid item xs>
          <ProductCard />
        </Grid>
        <Grid item xs>
          <ProductCard />
        </Grid>
      </Grid>
    </ProductsWrapper>
  );
}
