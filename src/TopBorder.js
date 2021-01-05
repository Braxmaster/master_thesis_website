import React from "react";
import { Grid, Typography } from "@material-ui/core";

function TopBorder(props) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="top_border"
      >
        <Grid item alignContent="flex-start" justify="center">
          <img src={props.logo} alt="Company logo" />
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </div>
  );
}

export default TopBorder;
