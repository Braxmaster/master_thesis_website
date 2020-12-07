import React from "react";
import { Grid, Typography } from "@material-ui/core";
import photo from "./pictures/black.jpg";

function Component(props) {
  return (
    <div className="Component" style={{ backgroundImage: `url(${photo})` }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="Component_grid"
      >
        <Grid item xs={4}>
          <Grid item>
            <Typography variant="h4" align="left" className="Component_text">
              {props.title}
            </Typography>
            <Typography align="left" className="Component_text">
              {props.body}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}

export default Component;
