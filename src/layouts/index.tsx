import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
const StyledContent = styled.div`
  padding: 20px 54.5px;
`;

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      {/* {sdf} */}
      {/* <StyledContent>{children}</StyledContent> */}
      I changed this code "asfasd asdf"
      <Footer />
    </>
  );
}
