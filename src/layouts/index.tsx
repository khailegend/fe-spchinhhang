import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
const StyledContent = styled.div`
  padding: 20px 54.5px;
`;

export default function AppLayout({ children }) {
  return (
    <>
      {/* I want to add this */}
      <Header />

      <StyledContent>{children}</StyledContent>

      <Footer />
    </>
  );
}
