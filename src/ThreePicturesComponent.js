import React from "react";
import { Grid, Typography } from "@material-ui/core";

function ThreePicturesComponent(props) {
  return (
    <div className="Component">
      <Grid
        container
        justify="center"
        alignItems="center"
        className="Component_grid"
      >
        <Grid item xs={12} sm={4}>
          <img src={props.PicOne} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={props.PicTwo} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={props.PicThree} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ThreePicturesComponent;
