import styled from "styled-components";

const FooterWrapped = styled.div`
  margin-top: auto;
  background: grey;
  padding: 0 54.5px;
`;

const Container = styled.div`
  max-width: 1270px;
  margin: auto;
`;

export default function Footer() {
  return (
    <FooterWrapped>
      <Container>This is my footer.</Container>
    </FooterWrapped>
  );
}
