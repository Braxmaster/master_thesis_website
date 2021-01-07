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
        style={{height: "100%"}}
      >
        <Grid item xs={12} sm={4} style={{height: "100%", backgroundImage: `url(${props.PicOne})`, backgroundSize: "cover", backgroundPosition: "center" }}>

        </Grid>
        <Grid item xs={12} sm={4} style={{height: "100%", backgroundImage: `url(${props.PicTwo})`, backgroundSize: "cover", backgroundPosition: "center" }}>

        </Grid>
        <Grid item xs={12} sm={4} style={{height: "100%", backgroundImage: `url(${props.PicThree})`, backgroundSize: "cover", backgroundPosition: "center" }}>

        </Grid>
      </Grid>
    </div>
  );
}

export default ThreePicturesComponent;
