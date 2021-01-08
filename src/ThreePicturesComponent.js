import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function ThreePicturesComponent(props) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className="Component">
      <Grid
        container
        justify="center"
        alignItems="center"
        className="Component_grid"
        style={{ height: isSmall ? "180vh" : "90vh" }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            height: "100%",
            backgroundImage: `url(${props.PicOne})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            height: "100%",
            backgroundImage: `url(${props.PicTwo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            height: "100%",
            backgroundImage: `url(${props.PicThree})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
    </div>
  );
}

export default ThreePicturesComponent;
