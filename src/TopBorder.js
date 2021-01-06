import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

function TopBorder(props) {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        className="top_border"
      >
        <Grid item xs={6} sm={2} alignContent="center" justify="center">
          <Box m={2}>
            <img
              style={{ width: "100%" }}
              src={props.logo}
              alt="Company logo"
            />
          </Box>
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </div>
  );
}

export default TopBorder;
