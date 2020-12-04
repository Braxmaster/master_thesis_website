import React from "react";
import { Typography, Grid } from "@material-ui/core";

function NavigationCircle(props) {
  return (
    <div class="circle">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="Box_in_circle"
      >
        <Grid item>
          <Typography>HOME</Typography>
        </Grid>
        <Grid item>
          <Typography>PRODUCT</Typography>
        </Grid>
        <Grid item>
          <Typography>VISION</Typography>
        </Grid>
        <Grid item>
          <Typography>ABOUT US</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavigationCircle;
