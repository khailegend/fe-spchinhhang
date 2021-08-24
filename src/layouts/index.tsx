import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
const StyledContent = styled.div`
  padding: 0 54.5px;
  background: #f4f4f4;
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
