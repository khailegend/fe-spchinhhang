import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const StyledBanner = styled(Grid)`
  && {
    background: red;
    height: 275px;
  }
`;

export default function MainBanner() {
  return (
    <StyledBanner>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Paper>image</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>image</Paper>
        </Grid>
      </Grid>
    </StyledBanner>
  );
}
