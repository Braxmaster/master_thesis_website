import React from "react";
import { Grid, Typography } from "@material-ui/core";
import logo from "./pictures/place_holder_logo.svg";

function TopBorder(props) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        className="top_border"
      >
        <Grid item className="top_border_grid_item" alignContent="flex-start">
          <img className="company_logo" src={logo} alt="Company logo" />
        </Grid>
      </Grid>
    </div>
  );
}

export default TopBorder;
