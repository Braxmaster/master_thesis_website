import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";

function NavigationCircle(props) {
  return (
    <div className="circle">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="Box_in_circle"
      >
        {props.labels.map((label, index) => (
          <Grid item key={index}>
            <Typography variant="body2">
              <Link
                underline={props.bold[index] ? "always" : "none"}
                color="inherit"
                className="nav_item_in_circle"
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
