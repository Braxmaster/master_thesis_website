import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";

function NavigationCircle(props) {
  console.log(props.labels);
  return (
    <div class="circle">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="Box_in_circle"
      >
        {props.labels.map((label, index) => (
          <Grid item key={index}>
            <Typography>
              <Link
                color="inherit"
                onClick={() => props.handleScrollToo(label)}
              >
                {label}
              </Link>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default NavigationCircle;
