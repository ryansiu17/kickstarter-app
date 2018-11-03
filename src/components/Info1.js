import React from "react";
import Textbox from "./Textbox";
import Picture from "./Picture";
import catagories from "../images/usd-pledged-vs-main-catagory.png";
const Info1 = () => {
  return (
    <div className="info1">
      <Textbox
        header={"USD Pledged vs. Main Catagories"}
        body={
          "	Over recent years, the Film & Video Making, Technology, Game, and Design areas have received the most amount of attention from the Kickstarter, whereas areas like Theater, Comics, Photography, and Dance did not seem to be a trend development of Kickstarter’s. However, what this graph has not shown was that the funding of almost every areas has dropped linearly starting in 2015. "
        }
      />
      <Picture source={catagories} alt="usd vs catagory" />
    </div>
  );
};
export default Info1;
