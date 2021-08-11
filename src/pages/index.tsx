import type { NextPage } from 'next'
import { Alert, AlertTitle } from '@material-ui/lab';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import ProductCard from '../components/ProductCard';

const StyledButton = styled(Button)`
  color: blueviolet;
`

const IndexPage: NextPage = () => {
  return (
    <>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>

      <StyledButton variant="contained">Click me</StyledButton>
      <ProductCard />
    </>
  )
}

export default IndexPage
