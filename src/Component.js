import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Component(props) {
  var output;
  if (props.align == "left") {
    output = (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="Component_grid"
      >
        <Grid item xs={4}>
          <Grid item>
            <Typography variant="h4" align="left" className={props.textClass}>
              {props.title}
            </Typography>
            <Typography align="left" className={props.textClass}>
              {props.body}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    );
  } else {
    output = (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="Component_grid"
      >
        <Grid item xs={6}></Grid>
        <Grid item xs={4}>
          <Grid item>
            <Typography variant="h4" align="left" className={props.textClass}>
              {props.title}
            </Typography>
            <Typography align="left" className={props.textClass}>
              {props.body}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <div className="Component" style={{ backgroundImage: `url(${props.pic})` }}>
      {output}
    </div>
  );
}

export default Component;
