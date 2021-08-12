import type { NextPage } from "next";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import ProductCard from "../components/ProductCard";
import MainBanner from "components/MainBanner";
import SuggestProducts from "features/suggestProducts";
const StyledButton = styled(Button)`
  color: blueviolet;
`;

const IndexPage: NextPage = () => {
  return (
    <>
      <MainBanner />
      <SuggestProducts />
    </>
  );
};

export default IndexPage;
