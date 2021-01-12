import React from "react";
import { Grid, Typography, Box, Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Faq(props) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      alignContent="center"
      style={{ height: isSmall ? "90vh" : "90vh" }}
    >
      <Grid item xs={0} sm={1}></Grid>
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Box m={2}>
            <Typography variant="h5" align="left">
              FAQ 💡
            </Typography>
          </Box>
        </Grid>
        <Box m={2}>
          <Grid item xs={12}>
            <Typography align="left" style={{ textDecoration: "underline" }}>
              - Will I be cold using this device?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="left">
              How cold you get is completely up to yourself, you control this by
              twisting the knob in the center of the body battery. A pro tip is
              to go for a run or do some exercises to build up extra body heat.
              Maybe avoid using it when you are sick.
            </Typography>
          </Grid>
        </Box>
        <Box m={2}>
          <Grid item xs={12}>
            <Typography align="left" style={{ textDecoration: "underline" }}>
              - What devices can a PEP charge/power?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="left">
              Anything that has a USB-C port. And the more people the more
              power!
            </Typography>
          </Grid>
        </Box>
        <Box m={2}>
          <Grid item xs={12}>
            <Typography align="left" style={{ textDecoration: "underline" }}>
              - How many devices can i charge at the same time?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="left">
              You can charge up to 6 devices/humans, its up to you how you want
              to distribute your electricity.
            </Typography>
          </Grid>
        </Box>
        <Box m={2}>
          <Grid item xs={12}>
            <Typography align="left" style={{ textDecoration: "underline" }}>
              - Why do I need this product?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="left">
              In the near future electricity will be much harder to find and
              with this product you can continue living a life with the comfort
              of multiple tech products such as a phone or computer.
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={0} sm={4}>
        {isSmall ? (
          <div></div>
        ) : (
          <Box m={4}>
            <img src={props.pic} style={{ width: "100%" }}></img>
          </Box>
        )}
      </Grid>
      {isSmall ? (
        <div></div>
      ) : (
        <Grid item xs={12}>
          <Box m={4}></Box>
        </Grid>
      )}
    </Grid>
  );
}

export default Faq;
