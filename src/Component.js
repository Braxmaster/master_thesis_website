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
        <Grid
          container
          xs={4}
          spacing={6}
          direction="column"
          justify="center"
          className="Component_text_box"
        >
          {props.body.map(function (element, index) {
            return (
              <Grid item>
                <Typography
                  variant={props.titleVariant}
                  align="left"
                  className={props.textClass}
                >
                  {props.title[index]}
                </Typography>
                <Typography
                  align="left"
                  variant={props.bodyVariant}
                  className={props.textClass}
                >
                  {element}
                </Typography>
              </Grid>
            );
          })}
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
        <Grid
          container
          xs={4}
          spacing={6}
          direction="column"
          justify="center"
          className="Component_text_box"
        >
          {props.body.map(function (element, index) {
            return (
              <Grid item>
                <Typography
                  variant={props.titleVariant}
                  align="left"
                  className={props.textClass}
                >
                  {props.title[index]}
                </Typography>
                <Typography
                  align="left"
                  variant={props.bodyVariant}
                  className={props.textClass}
                >
                  {element}
                </Typography>
              </Grid>
            );
          })}
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
