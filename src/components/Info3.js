import React from "react";
import Textbox from "./Textbox";
import Picture from "./Picture";
import distribution from "../images/catagory-size.png";
const Info3 = () => {
  return (
    <div className="info3">
      <Textbox
        header={"USD Goal Real vs. Main Catagory"}
        body={
          "From the graph displayed, areas of Game, Design, and Technology seemed to be equally significant on Kickstarter’s funding budget list, and Film & Video Making area was decently important on their list. Compared to the goal real, Kickstarter probably are expected to put more attention on those technology-related areas, such as Game, Design, and Technology because our society was becoming more and more concerned about online entertainments as well as digital development than ever."
        }
      />
      <Picture source={distribution} alt="Dist. of catagories" />
    </div>
  );
};
export default Info3;
