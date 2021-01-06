import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

function BottomBorder(props) {
  return (
    <div>
      <Grid container alignItems="center" className="Bottom_border">
        <Grid item xs={1}>
          <Box m={2}>
            <img className="bottom_border_logo" src={props.Logo} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={2}>
            <Typography align="left" variant="body2">
              {props.Text}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}

export default BottomBorder;
