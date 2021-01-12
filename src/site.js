import React from "react";
import Component from "./Component";
import NavigationCircle from "./NavigationCircle";
import TopBorder from "./TopBorder";
import BottomBorder from "./BottomBorder";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Faq from "./Faq";

import {
  logo,
  man_with_phone_white,
  charging_together,
  pep_logo,
  infographic,
  happy_town,
  team,
  ice_break,
  two_people_charging,
  woman_with_phone_to_side,
} from "./pictures/img_exporter";

class Site extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: ["HOME", "PRODUCT", "VISION", "ABOUT US"],
      inView: [false, false, false, false],
    };

    this.theme = createMuiTheme({
      typography: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
      },
    });

    //IM SO SORRY BUT MAKE SURE THAT THE NAVIGATION CIRCLE LABELS ARE THE SAME AS IN THE HANDLESCROLL IF STUFF
    this.HOME = React.createRef();
    this.PRODUCT = React.createRef();
    this.VISION = React.createRef();
    this.ABOUT_US = React.createRef();

    this.handleScrollToo = this.handleScrollToo.bind(this);
    this.isInViewport = this.isInViewport.bind(this);
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
  }

  // THIS IS TERRIBLE, FORGIVE ME
  handleScrollToo(ref) {
    var scroll_to = null;
    if (ref === "HOME") {
      scroll_to = this.HOME;
    } else if (ref === "PRODUCT") {
      scroll_to = this.PRODUCT;
    } else if (ref === "VISION") {
      scroll_to = this.VISION;
    } else if (ref === "ABOUT US") {
      scroll_to = this.ABOUT_US;
    }
    scroll_to.current.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollToElement);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollToElement);
  }

  handleScrollToElement(event) {
    if (this.isInViewport(window.innerHeight * 0.7, this.HOME)) {
      this.setState({ inView: [true, false, false, false] });
    } else if (this.isInViewport(window.innerHeight * 1.4, this.PRODUCT)) {
      this.setState({ inView: [false, true, false, false] });
    } else if (this.isInViewport(window.innerHeight * 2.1, this.VISION)) {
      this.setState({ inView: [false, false, true, false] });
    } else if (this.isInViewport(window.innerHeight * 0.7, this.ABOUT_US)) {
      this.setState({ inView: [false, false, false, true] });
    }
  }

  isInViewport(offset = 0, ref) {
    //offset = window.innerHeight * 0.7;
    //offset = 0;
    if (!ref) return false;
    const top = ref.current.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <div>
          <div ref={this.HOME}></div>
          <TopBorder logo={pep_logo} />
        </div>
        <NavigationCircle
          labels={this.state.labels}
          bold={this.state.inView}
          handleScrollToo={this.handleScrollToo}
        />
        <div>
          <Grid container>
            <Grid item sm={1}></Grid>
            <Grid item sm={10}>
              <Fade big>
                <Component
                  titleVariant="h6"
                  bodyVariant="body2"
                  title={["Power electronics with your body 🔋"]}
                  body={[
                    "Every second your body is radiating heat. This vast reserve of energy is wasted - until now. The PEP-device harvests this energy and makes it possible to power electronic devices with body heat. With it you will never go without electricity again. With PEP you don’t have to - your phone will only die if you do.",
                  ]}
                  pic={man_with_phone_white}
                  textClass="Component_text_black"
                  align="left"
                />
              </Fade>
              <Box m={2}></Box>
              <div ref={this.PRODUCT}></div>
              <Fade big>
                <Component
                  titleVariant="h6"
                  bodyVariant="body2"
                  title={[
                    "Control temperature 🌡️",
                    "Charge together 🤝",
                    "Free electricity ⚡",
                  ]}
                  body={[
                    "Take control of your body’s resources. For the first time ever you are in charge of the heat you produce. The body battery lets you control how much of your body heat PEP is harvesting.",
                    "Electricity is more fun together. Connect your PEP with friends and family to charge each others power supply. Connected devices can also output more power, increasing possibilities.",
                    "Why pay for electricity when you are making it for free? With the PEP you become an indie electricity producer in full control of your own power supply. Share it with friends? Sell it back to the grid? You decide!",
                  ]}
                  pic={charging_together}
                  textClass="Component_text_white"
                  align="right"
                />
              </Fade>
              {/*         <Fade big>
            <ThreePicturesComponent
              PicOne={front_detail}
              PicTwo={box_detail}
              PicThree={sholder_detail}
            />
</Fade>*/}
              <Fade big>
                <Component
                  titleVariant="h6"
                  bodyVariant="body2"
                  title={[]}
                  body={[]}
                  pic={infographic}
                  textClass="Component_text_white"
                  align="right"
                />
              </Fade>
              <Box m={2}></Box>
              <div ref={this.VISION}></div>
              <Fade big>
                <Component
                  titleVariant="h6"
                  bodyVariant="body2"
                  title={["A future lacking in electricity 🔥"]}
                  body={[
                    "As we adapt towards more sustainable means of electricity production we will also end up with less and less electricity to power our devices. Thus, in a near future, electricity will be much harder to come by.  But can you imagine a life without the digital comforts of everyday life?",
                  ]}
                  pic={ice_break}
                  textClass="Component_text_white"
                  align="left"
                />
              </Fade>
              <Fade big>
                <Component
                  titleVariant="h6"
                  bodyVariant="body2"
                  title={["Power to the people 🔌"]}
                  body={[
                    "We believe that electricity is a human right, and that a life without the social comforts of a phone or a computer is not a life lived in full. By using a PEP device you will never go without electricity again. And you will be prepared for a future with less electricity to go around.",
                  ]}
                  pic={woman_with_phone_to_side}
                  textClass="Component_text_black"
                  align="right"
                />
              </Fade>
              <Fade big>
                <Component
                  titleVariant="h6"
                  bodyVariant="body2"
                  title={["Inherently social 🧑‍🤝‍🧑"]}
                  body={[
                    "PEP is not a product - it is a system - and the more users the more power. By charging together, humans can create beautiful things and power more complex systems. But that's just the beginning. As more and more people join the PEP-collective, the amount of grass root electricity grows and make a positive impact towards a better tomorrow. With a PEP you live a life that is more social, more economic and with 100% green electricity.",
                  ]}
                  pic={happy_town}
                  textClass="Component_text_black"
                  align="left"
                />
              </Fade>
              <Box m={2}></Box>
              <div ref={this.ABOUT_US}></div>
              <Fade big>
                <Component
                  titleVariant="h6"
                  bodyVariant="body2"
                  title={["At °Seebeck we work for the future 🤖"]}
                  body={[
                    "We are a multidisciplinary think tank obsessed with innovation. With our feet firmly planted in reality and our eyes set on the future we develop socially and environmentally aware solutions for a better tomorrow. We believe that no system is set in stone and through technology and innovation we can change the world. We solve the problems of the future today.",
                  ]}
                  pic={team}
                  textClass="Component_text_black"
                  align="right"
                />
              </Fade>
              <Box m={2}></Box>
              <Fade big>
                <Faq pic={two_people_charging} />
              </Fade>
            </Grid>
            <Grid item sm={1}></Grid>
          </Grid>
        </div>
        <BottomBorder
          Logo={logo}
          Text="We are currently in the last stages of prototyping and will be releasing the product soon. If you would like to receive a notice when the PEP-device is on the market - do not hesitate to contact us."
        />
      </ThemeProvider>
    );
  }
}

export default Site;
