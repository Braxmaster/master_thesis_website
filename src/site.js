import React, { useRef } from "react";
import Component from "./Component";
import NavigationCircle from "./NavigationCircle";
import TopBorder from "./TopBorder";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { black, white } from "./pictures/img_exporter";

class Site extends React.Component {
  constructor(props) {
    super(props);

    this.theme = createMuiTheme({
      typography: {
        fontFamily: ["EB Garamond", "serif"].join(","),
      },
    });

    //IM SO SORRY BUT MAKE SURE THAT THE NAVIGATION CIRCLE LABELS ARE THE SAME AS IN THE HANDLESCROLL IF STUFF
    this.HOME = React.createRef();
    this.PRODUCT = React.createRef();
    this.VISION = React.createRef();
    this.ABOUT_US = React.createRef();

    this.handleScrollToo = this.handleScrollToo.bind(this);
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

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <div>
          <div ref={this.HOME}>
            <TopBorder />
          </div>
          <NavigationCircle
            labels={["HOME", "PRODUCT", "VISION", "ABOUT US"]}
            handleScrollToo={this.handleScrollToo}
          />
          <div>
            <Component
              title="HARVESTING ELECTRICITY"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              pic={white}
              textClass="Component_text_black"
              align="left"
            />
          </div>
          <div ref={this.PRODUCT}>
            <Component
              title="COOL PROMO PIC"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              pic={black}
              textClass="Component_text_white"
              align="right"
            />
          </div>
          <div ref={this.VISION}></div>
          <div ref={this.ABOUT_US}></div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Site;
