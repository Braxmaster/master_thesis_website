import React from "react";
import Component from "./Component";
import NavigationCircle from "./NavigationCircle";

class Site extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavigationCircle />
        <Component
          title="HARVESTING ELECTRICITY"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          picPath="./pictures/black.jpg"
        />
        <Component
          title="COOL PROMO PIC"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          picPath="./pictures/black.jpg"
        />
      </div>
    );
  }
}

export default Site;
