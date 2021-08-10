import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const StyledContent = styled.div`
  padding: 2%;
`

export default function AppLayout({ children}) {
  return (
    <>
      <Header />

      <StyledContent>
        {children}
      </StyledContent>

      <Footer />
    </>
  )
}
