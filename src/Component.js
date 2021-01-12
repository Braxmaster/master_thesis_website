import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Component(props) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("xs"));

  var output;
  if (isSmall) {
    output = (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="Component_grid"
      >
        <Grid
          item
          xs={12}
          style={{
            backgroundImage: `url(${props.pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "40vh",
          }}
        ></Grid>
        <Grid
          container
          xs={12}
          spacing={6}
          direction="column"
          justify="center"
          className="Component_text_box"
        >
          {props.body.map(function (element, index) {
            return (
              <Grid item key={index}>
                <Typography
                  variant={props.titleVariant}
                  align="left"
                  className="Component_text_black"
                >
                  {props.title[index]}
                </Typography>
                <Typography
                  align="left"
                  variant={props.bodyVariant}
                  className="Component_text_black"
                >
                  {element}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12}>
          <Box m={4}></Box>
        </Grid>
      </Grid>
    );
  } else if (props.align == "left") {
    output = (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="Component"
        style={{
          backgroundImage: `url(${props.pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          spacing={6}
          direction="column"
          justify="center"
          className="Component_text_box"
          xs={12}
          sm={4}
        >
          {props.body.map(function (element, index) {
            return (
              <Grid item key={index}>
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
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    );
  } else if (props.align == "right") {
    output = (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="Component"
        style={{
          backgroundImage: `url(${props.pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid item xs={6}></Grid>
        <Grid
          container
          xs={12}
          sm={4}
          spacing={6}
          direction="column"
          justify="center"
          className="Component_text_box"
        >
          {props.body.map(function (element, index) {
            return (
              <Grid item key={index}>
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
  return <div>{output}</div>;
}

export default Component;
