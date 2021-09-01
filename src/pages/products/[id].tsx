import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const ProductDetailWrapper = styled.div`
  padding: 10px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1270px;
  margin: auto;
`;

const Breadcrumb = dynamic(() => import('components/breadcrumb/breadcrumb'));
const ProductDetails = dynamic(() => import('components/product-detail/product-detail'));

export default function ProductDetailPage() {
  return (
    <ProductDetailWrapper>
      <Container>
        <Breadcrumb />
        <ProductDetails />
      </Container>
    </ProductDetailWrapper>
  );
}
