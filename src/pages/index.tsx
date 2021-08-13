import type { NextPage } from "next";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import ProductCard from "../components/ProductCard";
import MainBanner from "components/MainBanner";
import SuggestProducts from "features/suggestProducts";

const BodyWrapped = styled.div``;

const Container = styled.div`
  max-width: 1270px;
  margin: auto;
`;

const IndexPage: NextPage = () => {
  return (
    <BodyWrapped>
      <Container>
        <MainBanner />
        <SuggestProducts />
      </Container>
    </BodyWrapped>
  );
};

export default IndexPage;
