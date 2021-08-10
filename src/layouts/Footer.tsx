import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const FooterWrapped = styled.div`
  margin-top: auto;
  background: grey;
  padding: 5px;
`

export default function Footer() {
  return (
    <FooterWrapped>
      <Typography variant="body1">This is my footer.</Typography>
    </FooterWrapped>
  )
}
