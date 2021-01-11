import React from "react";
import { Grid, Typography, Box, Divider } from "@material-ui/core";

function Faq(props) {
  return (
    <Grid container alignContent="center" style={{ height: "90vh" }}>
      <Grid item xs={1}></Grid>
      <Grid item xs={6}>
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
              - What can a PEP charge?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="left">
              Anything. And the more people the more fun!
            </Typography>
          </Grid>
        </Box>
        <Box m={2}>
          <Grid item xs={12}>
            <Typography align="left" style={{ textDecoration: "underline" }}>
              - Can I charge all my electronic devices?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="left">
              You can charge up to 6 devices/humans.
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
      <Grid item xs={4}>
        <Box m={4}>
          <img src={props.pic} style={{ width: "100%" }}></img>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Faq;
