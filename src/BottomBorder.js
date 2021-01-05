import React from "react";
import { Grid, Typography } from "@material-ui/core";

function BottomBorder(props) {
  return (
    <div className="Bottom_border">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="Component_grid"
      >
        <Grid item xs={1}>
          <img src={props.Logo}/>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="body2">
              {props.Text}
          </Typography>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </div>
  );
}

export default BottomBorder;
