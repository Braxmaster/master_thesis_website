import React from "react";
import { Grid, Typography, Box, TextField, Button } from "@material-ui/core";

function BottomBorder(props) {
  return (
    <div>
      <Grid container alignItems="center" className="Bottom_border">
        <Grid item xs={6} sm={2}>
          <Box m={2}>
            <img className="bottom_border_logo" src={props.Logo} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <Typography align="left" variant="body2">
              {props.Text}
            </Typography>
          </Box>
        </Grid>
        <Grid container alignItems="center" className="Bottom_border">
          <Grid item>
          <img src={props.facebook} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BottomBorder;
