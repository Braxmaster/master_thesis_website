import React from "react";
import { Grid, Typography } from "@material-ui/core";

function BottomBorder(props) {
  return (
    <div className="Bottom_border">
      <Grid
        container
        justify="center"
        alignItems="center"
        className="Component_grid"
        spacing={2}
      >
        <Grid item xs={1} alignContent="center" justify="center">
          <img className="bottom_border_logo" src={props.Logo}/>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="body2">
              {props.Text}
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}

export default BottomBorder;
