import React, { useRef } from "react";
import Component from "./Component";
import NavigationCircle from "./NavigationCircle";
import TopBorder from "./TopBorder";
import ThreePicturesComponent from "./ThreePicturesComponent";
import BottomBorder from "./BottomBorder";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { black, white, logo } from "./pictures/img_exporter";

class Site extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: ["HOME", "PRODUCT", "VISION", "ABOUT US"],
      inView: [false, false, false, false],
    };

    this.theme = createMuiTheme({
      typography: {
        fontFamily: ["Merriweather", "serif"].join(","),
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
    if (ref == "HOME") {
      scroll_to = this.HOME;
    } else if (ref == "PRODUCT") {
      scroll_to = this.PRODUCT;
    } else if (ref == "VISION") {
      scroll_to = this.VISION;
    } else if (ref == "ABOUT US") {
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
    if (this.isInViewport(0, this.HOME)) {
      this.setState({ inView: [true, false, false, false] });
    } else if (this.isInViewport(0, this.PRODUCT)) {
      console.log("Product visible");
      this.setState({ inView: [false, true, false, false] });
    } else if (this.isInViewport(0, this.VISION)) {
      console.log("Vision visible");
      this.setState({ inView: [false, false, true, false] });
    } else if (this.isInViewport(0, this.ABOUT_US)) {
      console.log("About us visible");
      this.setState({ inView: [false, false, false, true] });
    }
  }

  isInViewport(offset = 0, ref) {
    offset = window.innerHeight * 0.7;
    if (!ref) return false;
    const top = ref.current.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <div>
          <div
            ref={this.HOME}
            style={{ height: "20px", backgroundColor: "red" }}
          ></div>
          <TopBorder logo={logo} />
        </div>
        <NavigationCircle
          labels={this.state.labels}
          bold={this.state.inView}
          handleScrollToo={this.handleScrollToo}
        />
        <div>
          <Component
            titleVariant="h6"
            bodyVariant="body2"
            title={["PEP - Power your electronics with your body"]}
            body={[
              "Every second your body is radiating heat. This vast reserve of energy is wasted - until now. The PEP-device harvests this energy and makes it possible to power electronic devices with body heat. With it you will never go without electricity again. Your phone will only die if you do.",
            ]}
            pic={white}
            textClass="Component_text_black"
            align="left"
          />
          <div
            ref={this.PRODUCT}
            style={{ height: "20px", backgroundColor: "red" }}
          ></div>
          <Component
            titleVariant="h6"
            bodyVariant="body2"
            title={[
              "Charge together",
              "Control temperature",
              "Free electricity",
            ]}
            body={[
              "Electricity is more fun together. Connect your PEP with friends and family to charge each others power supply. Connected devices can also output more power, increasing possibilites.",
              "Take control of your body’s resources. For the first time ever you are in charge of the heat you produce. The body battery knob lets you control how much body heat your PEP will harvest.",
              "Why pay for electricity when you are making it for free? With the PEP you become an indie electricity producer in full control of your own power supply. Share it with friends? Sell itt back to the grid? You decide!",
            ]}
            pic={black}
            textClass="Component_text_white"
            align="right"
          />

          <div
            ref={this.VISION}
            style={{ height: "20px", backgroundColor: "red" }}
          ></div>
          <ThreePicturesComponent PicOne={logo} PicTwo={logo} PicThree={logo} />
          <div
            ref={this.ABOUT_US}
            style={{ height: "20px", backgroundColor: "red" }}
          ></div>
          <Component
            titleVariant="h6"
            bodyVariant="body2"
            title={["At LOOP we work for the future."]}
            body={[
              "We are a multidiciplinary think tank obsessed with innovation. With our feet firmly planted in reality and our eyes set on the future we develop socially and environmentaly aware solutions for a better tomorrow. We believe that no system is set in stone and through technology and innovation we can change the world. We solve the problems of the future today.",
            ]}
            pic={black}
            textClass="Component_text_white"
            align="right"
          />
        </div>
        <BottomBorder
          Logo={logo}
          Text="We are currently in the last stages of prototyping and will be releasing the product soon. If you would like to recieve a notis when the PEP-device is on the market - enter your email here."
        />
      </ThemeProvider>
    );
  }
}

export default Site;
